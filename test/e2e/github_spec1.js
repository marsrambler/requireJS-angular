describe('angularjs homepage todo list', function () {
    var width = 1024;
    var height = 768;
    browser.driver.manage().window().setSize(width, height);
    browser.ignoreSynchronization = true;   // 不启用智能等待，因为 github 不是用 angluar 编写的
    browser.get('https://github.com');

    it('should search input visible', function () {
        var searchInput = element(by.className('js-site-search-focus'));
        var searchForm = element(by.className('js-site-search-form'));
        expect(searchInput.isDisplayed()).toEqual(true);
        searchInput.sendKeys('protractor');
        searchForm.submit();
    });

    it('should show 10 results', function () {
        var searchList = element.all(by.className('repo-list-item'));
        expect(searchList.count()).toEqual(10);
        element(by.css('.repo-list-item h3 a')).click();
    });

    it('should repo detail visible', function () {
        var repoContent = element.all(by.className('repository-content'));
        expect(repoContent.isDisplayed()).toEqual([true]);
    });

    it('should protractor repo found', function (done) {
        browser.executeScript(function () {
            return window.location;
        }).then(function (location) {
            expect(location.pathname).toEqual('/angular/protractor');
            done();
        });
    });
});