import React from 'react';
import {inject, noView, bindable, customElement} from 'aurelia-framework';
import UserFormComponent from './react-components/UserForm';

@noView()
@inject(Element)
export class UserForm {

  element: Element;

  constructor(element) {
    this.element = element;
  }

  render() {
    React.render(<UserFormComponent submit={this.submit}/>, this.element);
  }

  bind() {
    this.render();
  }

  submit(firstname : string, lastname: string) {
    console.log(firstname);
  }

  disabledChanged() {
    this.render();
  }
}
