var config = require('./package.json');

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import bundleWorker from 'rollup-plugin-bundle-worker';

export default {
  entry: config.main,
  format: config.moduleFormat,
  moduleName: config.moduleName,
  sourceMap: true,
  dest: config.moduleBuildDir + '/' + config.moduleName + '.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    bundleWorker()
  ]
};
