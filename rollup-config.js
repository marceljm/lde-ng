import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify'

//paths are relative to the execution path
export default {
  entry: 'src/main-aot.js',
  dest: 'aot/dist/build.js', // output a single application bundle
  sourceMap: true,
  sourceMapFile: 'aot/dist/build.js.map',
  format: 'iife',
  onwarn: function (warning) {
    console.warn(warning.message);
  },
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({
      include: ['node_modules/rxjs/**', 'node_modules/primeng/**'],
      namedExports: {
        'node_modules/primeng/primeng.js': ['DataGridModule, PanelModule, ButtonModule, DataTableModule, SharedModule, InputTextModule, GrowlModule']
      },
    }),
    uglify()
  ]
}
