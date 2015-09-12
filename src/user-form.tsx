import * as React from 'react';
import {inject, noView, bindable, customElement} from 'aurelia-framework';
import UserFormComponent from './react-components/UserForm';
import AddUserIntent, {UserData} from './intents/AddUserIntent';
import UserModel from './model/UserModel';

@noView
@inject(Element)
export class UserForm {

  element: Element;

  constructor(element) {
    this.element = element;

    UserModel.subject.subscribe((data: UserData) => {
      React.render(<UserFormComponent {...data}/>, this.element);
    });
  }

  render() {
    UserModel.subject.onNext(new UserData());
  }

  bind() {
    this.render();
  }

}
