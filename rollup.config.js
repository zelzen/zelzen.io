import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: isProduction === false,
    format: 'iife',
    name: 'app',
    file: 'public/dist/bundle.js',
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: isProduction === false,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: (css) => {
        css.write('public/dist/bundle.css');
      },
    }),

    // Use nodejs style resolution
    resolve({
      extensions: ['.mjs', '.svelte', '.js', '.jsx', '.json'],
    }),
    // Allow CommonJS
    commonjs(),
    // Resolve .json files
    json(),

    replace({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
    }),

    // If we're building for production, minify
    isProduction && terser(),
  ],
};
