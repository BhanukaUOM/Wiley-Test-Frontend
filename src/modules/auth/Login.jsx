import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import "./Login.css"
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"
import { NotificationManager } from "react-notifications";

export class Login extends Component {

  handleSubmit = (values) => {
    let loginDto = {
      email: values && values.email,
      password: values && values.password
    }
    console.log("loginDto", loginDto)

    this.props.authActions.login(loginDto)

  }
  render() {
    const { handleSubmit, login } = this.props
    return (
      <div className="login-container">
        <div className="auth-container">
          <div className="image">
            <h1>Welcome To <span>Wiley</span></h1>
          </div>
          <div className="content">
            <h1>Login</h1>
            <form
              onSubmit={handleSubmit(this.handleSubmit)}
            >
              <div className="form-group">
                <label htmlFor>UserName</label>
                <br />
                <Field
                  type="text"
                  className="form-control"
                  name="username"
                  component={InputField}
                  placeholder="name@user.com"
                  id="txt" aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <label htmlFor>Password</label>
                <br />
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  component={InputField}
                  placeholder="Password"
                  id="txt" aria-describedby="helpId"
                />
              </div>
              <Link className="fp" to="/register">Register</Link>
              <br />
              <Link className="fp" to="/forgot-password">Forgot Password?</Link>
              <br />
              <button type="button" className="btn" type="submit" disabled={login.pending}>{login.pending ? <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div> : "Login"}</button>
            </form>
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
    login: state.auth.login

  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
}


export default reduxForm({
  form: "login",
  // validate
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Login))
);
