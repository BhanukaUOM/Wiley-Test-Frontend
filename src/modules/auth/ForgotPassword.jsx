import React, { Component } from 'react'
import { connect } from "react-redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
// import "./Login.css"
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"

class ForgotPassword extends Component {
    handleSubmit = () => {
        console.log("handleSubmit", this.props)
        this.props.history.push("/register")
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
                        <h1>Forgot Password</h1>
                        <form
                            onSubmit={handleSubmit(this.handleSubmit)}
                        >
                            <div className="form-group">
                                <label htmlFor>Email Address</label>
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

                            <Link className="fp" to="/login">Back to Login</Link>
                            <br />
                            <button type="button" className="btn" type="submit">Submit</button>
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
    form: "forgotPassword",
    // validate
})(
    connect(
        mapStateToProps,
        authActions
    )(withRouter(ForgotPassword))
);
