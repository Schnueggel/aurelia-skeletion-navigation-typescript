/// <reference path="../../typings/react/react.d.ts"/>
import React from 'react';

export class UserFormProps {
  public firstname:string;
  public lastname:string;
  public fullname: string;
  public submit: Function = () => {};
}

export default class UserFormComponent extends React.Component<UserFormProps, any> {

  constructor(props:UserFormProps) {
    super(props);
  }
  render() {
    return (
      <form role="form" onSubmit={this.props.submit}>
        <div className="form-group">
          <label htmlFor="fn">First Name</label>
          <input type="text" value={this.props.firstname} className="form-control" id="fn" placeholder="firstname"/>
        </div>
        <div className="form-group">
          <label htmlFor="ln">Last Name</label>
          <input type="text" value={this.props.lastname} className="form-control" id="ln" placeholder="lastname"/>
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <p className="help-block">{this.props.fullname}</p>
        </div>
        <button type="submit" className="btn btn-default" label="Submit">Submit</button>
      </form>
    );
  }
}
