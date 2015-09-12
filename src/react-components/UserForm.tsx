/// <reference path="../../typings/react/react.d.ts"/>
import * as React from 'react';
import AddUserIntent, {UserData} from '../intents/AddUserIntent';

export default class UserFormComponent extends React.Component<UserData, any> {
  state: any = {
    firstname: '',
    lastname: ''
  };

  constructor(props:UserData) {
    super(props);
    this.state.firstname = this.props.firstname;
    this.state.lastname = this.props.lastname;
  }

 /**
  * Handles changes of firstname input field
  **/
  handleFirstnameChange(event: React.FormEvent) {
    this.setState({
      firstname: event.target.value
    });
  }
  /**
   * Handles changes of lastname input field
   **/
  handleLastnameChange(event: React.FormEvent) {
    this.setState({
      lastname: event.target.value
    });
  }

  handleSubmit() {
    const userData = new UserData();
    userData.firstname = this.state.firstname;
    userData.lastname = this.state.lastname;

    AddUserIntent.addUser(userData);
  }

  render() {
    return (
      <form role="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="fn">Firstname</label>
          <input type="text" value={this.state.firstname} className="form-control" id="fn" placeholder="Firstname" onChange={this.handleFirstnameChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label htmlFor="ln">Lastname</label>
          <input type="text" value={this.state.lastname} className="form-control" id="ln" placeholder="Lastname" onChange={this.handleLastnameChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>FullName</label>
          <p className="help-block">{this.state.firstname} {this.state.lastname}</p>
        </div>
        <button type="submit" className="btn btn-default" label="Submit">Submit</button>
      </form>
    );
  }
}
