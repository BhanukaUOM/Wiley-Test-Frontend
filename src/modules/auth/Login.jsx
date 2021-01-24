import React, { Component } from 'react'
import { connect } from "react-redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import "./Login.css"
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"

export class Login extends Component {

  handleSubmit = () => {
    console.log("handleSubmit", this.props)
    this.props.history.push("/dashboard")
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div className="login-container">
        <div className="container">
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
                {/* <input type="text" className="form-control" name id="txt" aria-describedby="helpId" placeholder="UserName" /> */}
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
                {/* <input type="password" className="form-control" name id="txt" placeholder="Password" /> */}
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  component={InputField}
                  placeholder="Password"
                  id="txt" aria-describedby="helpId"
                />
              </div>
              <Link className="fp" to="/forgot-password">Forgot Password?</Link>
              <br />
              <button type="button" className="btn" type="submit">Login</button>
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
    ...state
  };
}


export default reduxForm({
  form: "login",
  // validate
})(
  connect(
    mapStateToProps,
    authActions
  )(withRouter(Login))
);
