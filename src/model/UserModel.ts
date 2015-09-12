import * as Rx from 'rx';
import AddUserIntent, {UserData} from '../intents/AddUserIntent';

const UserModel = {
  userDataModel: new UserData(),
  subject: new Rx.Subject()
};

AddUserIntent.subject.subscribe((data: UserData) => {
  UserModel.userDataModel = data;
  UserModel.subject.onNext(data);
});

export default UserModel;
