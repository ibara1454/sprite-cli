import typescript from 'rollup-plugin-ts';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      // The CommonJS module.
      // Generate a single output file.
      {
        file: pkg.exports.require,
        format: 'cjs',
        sourcemap: true,
      },
      // The ES module.
      // Generate a single output file.
      {
        file: pkg.exports.module,
        format: 'es',
        sourcemap: true,
      },
      // {
      //   file: pkg.unpkg,
      //   format: 'umd',
      //   sourcemap: true,
      //   name: 'LibGlobalName',
      //   // Use the external library (by the `external` option)
      //   // and declares the global variable name for it in umd/iife bundles.
      //   // https://github.com/rollup/rollup/issues/1169#issuecomment-268815735
      //   // https://rollupjs.org/guide/en/#outputglobals
      //   globals: {
      //     'lib': LibGlobalName
      //   },
      // },
    ],
    // Specify the external dependencies explicitly to tell rollup.js that the dependencies
    // are required at runtime.
    // See https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
    external: [],
    plugins: [typescript()],
  },
];
