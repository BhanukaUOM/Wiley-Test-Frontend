import React, { Component } from 'react'
import { connect } from "react-redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import "./Login.css"
import { InputField } from '../../components/controls/Fields';

export class Login extends Component {
    render() {
        return (
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            
            <title>Login Form</title>
            <div className="container">
              <div className="image">
                <h1>Welcome To <span>Wiley</span></h1>
              </div>
              <div className="content">
                <h1>Login</h1>
                <div className="form-group">
                  <label htmlFor>UserName</label>
                  <br />
                  {/* <input type="text" className="form-control" name id="txt" aria-describedby="helpId" placeholder="UserName" /> */}
                  <Field
                    type="text"
                    className="form-control mb-2"
                    name="username"
                    component={InputField}
                    placeholder="name@user.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Password</label>
                  <br />
                  <input type="password" className="form-control" name id="txt" placeholder="Password" />
                </div>
                <a className="fp" href="index.html">Forgot Password?</a>
                <br />
                <button type="button" className="btn"><a href="index.html">Login</a></button>
              </div>
            </div>
          </div>
        )
    }
}

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };
  
  function mapStateToProps(state) {
    return {
      ...state
    };
  }


export default reduxForm({
    form: "login",
    validate
  })(
    connect(
      mapStateToProps,
      authActions
    )(Login)
  );
