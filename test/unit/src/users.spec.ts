import {Users} from '../../../dist/users';

class HttpStub {
  itemStub: any;
  url: any;
  fetch(url) {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ json: () => response });
    })
  }
  configure(func){
  }
}

describe('the Users module', () => {

  it('sets fetch response to users', (done) => {
    var http =  <any>new HttpStub(),
        sut = new Users(http),
        itemStubs = [1],
        itemFake = [2];

    http.itemStub = itemStubs;
    sut.activate().then(() => {
      expect(sut.users).toBe(itemStubs);
      expect(sut.users).not.toBe(itemFake);
      done();
    });
  });
});
