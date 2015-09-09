/// <reference path="./e2e.d.ts" />
///<reference path="../../../typings/angular-protractor/angular-protractor.d.ts" />
export class PageObject_Skeleton {

  constructor() {

  }

  getCurrentPageTitle(): webdriver.promise.Promise<string> {
    return browser.getTitle();
  }

  navigateTo(href: string): webdriver.promise.Promise<void> {
    const url: string = 'a[href="' + href + '"]';
    element(by.css(url)).click();
    return browser.waitForRouterComplete();
  }
}
