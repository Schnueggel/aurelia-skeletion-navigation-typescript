/// <reference path="./e2e.d.ts" />
///<reference path="../../../typings/angular-protractor/angular-protractor.d.ts" />
var PageObject_Skeleton = (function () {
    function PageObject_Skeleton() {
    }
    PageObject_Skeleton.prototype.getCurrentPageTitle = function () {
        return browser.getTitle();
    };
    PageObject_Skeleton.prototype.navigateTo = function (href) {
        var url = 'a[href="' + href + '"]';
        element(by.css(url)).click();
        return browser.waitForRouterComplete();
    };
    return PageObject_Skeleton;
})();
exports.PageObject_Skeleton = PageObject_Skeleton;
