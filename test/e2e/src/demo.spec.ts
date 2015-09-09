/// <reference path="./e2e.d.ts" />
///<reference path="../../../typings/angular-protractor/angular-protractor.d.ts" />
import {PageObject_Welcome} from './welcome.po';
import {PageObject_Skeleton} from './skeleton.po';

describe('aurelia skeleton app', function() {
  var po_welcome: PageObject_Welcome ,
      po_skeleton: PageObject_Skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();
    browser.loadAndWaitForAureliaPage("http://localhost:9000");

  });

  it('should load the page and display the initial page title', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  });

  it('should display greeting', () => {
    expect(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
  });

  it('should automatically write down the fullname', () => {
    po_welcome.setFirstname('Rob');
    po_welcome.setLastname('Eisenberg');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect(po_welcome.getFullname()).toBe('ROB EISENBERG');
  });

  it('should show alert message when clicking submit button', () => {
    expect(po_welcome.openAlertDialog()).toBe(true);
  });

  it('should navigate to users page', () => {
    po_skeleton.navigateTo('#/users');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
  });
});
