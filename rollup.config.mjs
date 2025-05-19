import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { fileURLToPath } from 'url';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import generatePackageJson from 'rollup-plugin-generate-package-json';
const distDir = 'dist';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          {
            find: 'axios/lib/adapters/http',
            replacement: 'axios/lib/adapters/xhr' // dùng adapter browser
          },
          {
            find: 'react',
            replacement: path.resolve(__dirname, 'node_modules/react'),
          },
        ]
      }),
      resolve({
        browser: true,
        preferBuiltins: false // 👈 Thêm dòng này nếu bạn build cho browser
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
      postcss({ extensions: ['.css'], inject: true, extract: false }),
      json(),
      generatePackageJson({
        outputFolder: distDir,
        baseContents: {
          name: packageJson.name,
          version: packageJson.version,
          description: packageJson.description,
          license: packageJson.license,
          author: packageJson.author,
          main: './cjs/index.js',
          module: './esm/index.js',
          types: './index.d.ts',
          peerDependencies: {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
          }
        }
      })
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, 'react', 'react-dom'],
  },
];
