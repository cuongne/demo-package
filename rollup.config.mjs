import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert { type: 'json' };
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
          }
        ]
      }),
      resolve({
        browser: true,
        preferBuiltins: false // 👈 Thêm dòng này nếu bạn build cho browser
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: [] }),
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
          peerDependencies: packageJson.peerDependencies
        }
      })
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
