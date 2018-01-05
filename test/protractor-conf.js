exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['customConfig.js', 'e2e/contr*_spec.js'],
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        filePrefix: 'output',
        savePath: '../e2eOutput'
      })
    );
  },
  capabilities: {
    'browserName': 'chrome'
  }, 
}
