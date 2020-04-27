var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'https://localhost:4444/wd/hub',
    directConnect: 'true',
    specs: ['wefox/testcases/wefox.spec.js'],
    
    capabilities:{
      browserName: 'chrome'
    },
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'reports/screenshots'
      }).getJasmine2Reporter());
   }
  };
  