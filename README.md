This is a simple repository to demo how to use 

    grunt + bower + requirejs + angular

together, and also how to write unit tests and e2e tests for them.

## run unit tests

    /*karma start karma.conf.js*/  
    Run `grunt unit-test`

## run e2e tests

    /*webdriver-manager start*/  
    /*npm start*/  
    /*protractor test/protractor-conf.js*/  
    Run `grunt e2e-test`

## debugging unit test in vcs
    Run `karma start karma.debug.conf.js --browsers Chrome_with_debugging`  
    set the breakpoint  
    launch `Attach to Chrome` in vcs

## debug e2e test in vcs
    Run `grunt server`  
    set the breakpoint  
    launch `Launch protractor` in vcs
