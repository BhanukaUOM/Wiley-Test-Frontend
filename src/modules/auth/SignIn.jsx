import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import "./Auth.css"
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"

export class SignIn extends Component {

  handleSubmit = (values) => {
    let loginDto = {

      email: values && values.email,
      password: values && values.password
    }
    this.props.authActions.login(loginDto)

  }
  render() {
    const { handleSubmit, login } = this.props
    return (
      <div className="login-container">
        <div className="auth-container">
          <div className="auth-image">
            <h1>Welcome To <span className="auth-span">Wiley</span></h1>
          </div>
          <div className="auth-content">
            <h1>Sign In</h1>
            <form
              onSubmit={handleSubmit(this.handleSubmit)}
            >
              <div className="form-group">
                <br />
                <Field
                  type="text"
                  className="auth-form-control"
                  name="email"
                  component={InputField}
                  placeholder="email"
                  aria-describedby="helpId"
                  autoComplete
                />
              </div>


              <div className="form-group">
                <br />
                <Field
                  type="password"
                  className="auth-form-control"
                  name="password"
                  component={InputField}
                  placeholder="Password"
                  aria-describedby="helpId"
                  autoComplete
                />
              </div>

              <button type="button" className="btn auth-button" type="submit" disabled={login.pending}>{login.pending ? <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div> : "Login"}</button>

              <hr />
              <Link className="auth-fp" to="/sign-up">Sign Up</Link>
              <br />
              <Link className="auth-fp" to="/forgot-password">Forgot Password?</Link>
              <br />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  }
  if (values.password && values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
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
  form: "SignIn",
  validate
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(SignIn))
);
