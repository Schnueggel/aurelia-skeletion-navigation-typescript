/// <reference path="./e2e.d.ts" />
///<reference path="../../../typings/angular-protractor/angular-protractor.d.ts" />
var PageObject_Welcome = (function () {
    function PageObject_Welcome() {
    }
    PageObject_Welcome.prototype.getGreeting = function () {
        return element(by.tagName('h2')).getText();
    };
    PageObject_Welcome.prototype.setFirstname = function (value) {
        return element(by.valueBind('firstName')).clear().sendKeys(value);
    };
    PageObject_Welcome.prototype.setLastname = function (value) {
        return element(by.valueBind('lastName')).clear().sendKeys(value);
    };
    PageObject_Welcome.prototype.getFullname = function () {
        return element(by.css('.help-block')).getText();
    };
    PageObject_Welcome.prototype.pressSubmitButton = function () {
        return element(by.css('button[type="submit"]')).click();
    };
    PageObject_Welcome.prototype.openAlertDialog = function () {
        var _this = this;
        return browser.wait(function () {
            _this.pressSubmitButton();
            return browser.switchTo().alert().then(
            // use alert.accept instead of alert.dismiss which results in a browser crash
            function (alert) { alert.accept(); return true; }, function () { return false; });
        });
    };
    return PageObject_Welcome;
})();
exports.PageObject_Welcome = PageObject_Welcome;
