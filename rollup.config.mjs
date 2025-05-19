import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import generatePackageJson from 'rollup-plugin-generate-package-json';

import path from 'path';
import { fileURLToPath } from 'url';
import packageJson from './package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = 'dist';

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'], // ✅ DO NOT BUNDLE REACT
    output: [
      {
        file: packageJson.main, // CommonJS
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module, // ESModule
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(), // ✅ Automatically externalize peerDependencies

      alias({
        entries: [
          {
            find: 'axios/lib/adapters/http',
            replacement: 'axios/lib/adapters/xhr', // use browser adapter
          },
        ],
      }),

      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
      }),
      postcss({
        extensions: ['.css'],
        inject: true,
        extract: false,
      }),
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
        },
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, 'react', 'react-dom'],
  },
];
