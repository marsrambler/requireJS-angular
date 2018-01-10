var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/',

  paths: {
    app: 'public/js/app',
    'hello_func': 'public/js/hello_func',
    'hello_funcs': 'public/js/hello_funcs',
    'hello_cls': 'public/js/hello_cls',
    hello2: 'public/js/hello2',
    jquery: 'public/js/lib/jquery/jquery',
    angular: 'public/js/lib/angular/angular',
    'angularMocks': 'public/js/lib/angular-mocks/angular-mocks',
    'app.controllers': 'public/js/controllers'
  },
  shim: {
    angular : { exports : 'angular'},
    'hello_func' : { exports: 'hello' },
    'hello_funcs' : { 
      init: function() {
        return {
          hello1: hello1,
          hello2: hello2
        }
      } 
    },
    'hello_cls' : { exports: 'MathUtils' },
    'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
  },
  priority: ["angular"],
  map: {
    '*': { 'jquery': 'jquery-private'},
    'jquery-private': { 'jquery': 'jquery'}
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
