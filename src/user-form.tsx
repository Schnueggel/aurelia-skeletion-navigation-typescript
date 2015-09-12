import * as React from 'react';

import {inject, noView, bindable, customElement} from 'aurelia-framework';
import UserFormComponent from './react-components/UserForm';
import { UserFormProps } from './react-components/UserForm';

@noView()
@inject(Element)
export class UserForm {
  userFormProps: UserFormProps;
  element: Element;

  constructor(element) {
    this.element = element;
    this.userFormProps = new UserFormProps();
    this.userFormProps.firstname = 'John';
    this.userFormProps.lastname = 'Doe';
    this.userFormProps.submit = this.submit.bind(this);
  }

  render() {
    React.render(<UserFormComponent {...this.userFormProps}/>, this.element);
  }

  bind() {
    this.render();
  }

  submit(event: __React.FormEvent) {
    this.userFormProps.firstname = 'Johfffn';
    console.log(event);
  }
}
