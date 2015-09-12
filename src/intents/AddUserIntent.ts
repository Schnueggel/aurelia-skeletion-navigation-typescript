import * as Rx from 'rx';

export class UserData {
  firstname: string;
  lastname: string;
}

let AddUserIntent = {
  subject: new Rx.Subject<UserData>(),
  addUser(data: UserData) {
    this.subject.onNext(data);
  }
};

export default AddUserIntent;
