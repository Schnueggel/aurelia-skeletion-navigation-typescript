/// <reference path="../../typings/react/react.d.ts"/>
import * as React from 'react';

export class UserFormProps {
  public firstname:string;
  public lastname:string;
  public submit: React.FormEventHandler = () => {};
}

export class UserFormState {
  firstname:string;
  lastname:string;
}
export default class UserFormComponent extends React.Component<UserFormProps, any> {
  state: any = {
    firstname: '',
    lastname: ''
  };
  constructor(props:UserFormProps) {
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

  render() {
    return (
      <form role="form" onSubmit={this.props.submit}>
        <div className="form-group">{console.log("hund")}
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
