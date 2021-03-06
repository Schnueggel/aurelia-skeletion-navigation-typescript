/// <reference path="./e2e.d.ts" />
///<reference path="../../../typings/angular-protractor/angular-protractor.d.ts" />
export class PageObject_Welcome {

  constructor() {

  }

  getGreeting() {
    return element(by.tagName('h2')).getText();
  }

  setFirstname(value: string) {
    return element(by.valueBind('firstName')).clear().sendKeys(value);
  }

  setLastname(value: string) {
    return element(by.valueBind('lastName')).clear().sendKeys(value);
  }

  getFullname() {
    return element(by.css('.help-block')).getText();
  }

  pressSubmitButton() {
    return element(by.css('button[type="submit"]')).click();
  }

  openAlertDialog() : webdriver.promise.Promise<boolean>  {
    return browser.wait(() => {
      this.pressSubmitButton();

      return browser.switchTo().alert().then(
        // use alert.accept instead of alert.dismiss which results in a browser crash
        function(alert: webdriver.Alert) { alert.accept(); return true; },
        function() { return false; }
      );
    });
  }
}
