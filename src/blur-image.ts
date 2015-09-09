import {inject} from 'aurelia-framework';

@inject(Element)
export class BlurImageCustomAttribute {
  element: any;
  constructor(element){
    this.element = element;
  }

  valueChanged(newImage){

  }
}
