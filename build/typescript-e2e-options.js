/**
 * On e2e test we use commonjs because this is the default with protractor. So far I didnt have a good solution to run protractor test with systemjs
 */
module.exports = {
  module: 'commonjs',
  noImplicitAny: true,
  noLib: false,
  experimentalDecorators: true,
  target: 'ES5',
  typescript : require('typescript')
};
