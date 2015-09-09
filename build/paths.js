var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: [appRoot + '**/*.ts'],
  dts: ['jspm_packages/aurelia/**/*.d.ts','typings/tsd.d.ts'],
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  doc:'./doc',
  unitSpecsSrc: ['test/unit/src/*.ts'],
  unitSpecsDist: 'test/unit/dist/',
  e2eSpecsSrc: ['test/e2e/src/*.ts'],
  e2eSpecsDist: 'test/e2e/dist/'
};
