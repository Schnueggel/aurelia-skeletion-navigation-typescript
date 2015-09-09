///<reference path="../../../typings/tsd.d.ts" />
declare module protractor {
  interface IBrowser {
    loadAndWaitForAureliaPage(url : string): webdriver.promise.Promise<void>;
    waitForRouterComplete(): webdriver.promise.Promise<void>;
  }

  interface IProtractorLocatorStrategy {
    valueBind(value: string): webdriver.Locator;
  }
}
