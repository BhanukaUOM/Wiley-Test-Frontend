import React, { Component } from 'react'
import { connect } from "react-redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"

class ResetPasswordVerify extends Component {
    handleSubmit = (values) => {
        console.log("handleSubmit", this.props)
        const token = new URLSearchParams(this.props.location.search).get("token");
        const email = new URLSearchParams(this.props.location.search).get("email");

        let resetPasswordDto = {
            email: "email",
            token: "token",
            password: values && values.password
        }
        this.props.authActions.resetPasswordVerify(resetPasswordDto)
    }
    render() {
        const { handleSubmit, resetPasswordVerify } = this.props

        return (
            <div className="login-container">
                <div className="auth-container">
                    <div className="auth-image">
                        <h1>Welcome To <span className="auth-span">Wiley</span></h1>
                    </div>
                    <div className="auth-content">
                        <h1>Reset Password</h1>
                        <form
                            onSubmit={handleSubmit(this.handleSubmit)}
                        >
                            <div className="form-group">
                                <br />
                                <Field
                                    type="text"
                                    className="auth-form-control"
                                    name="password"
                                    component={InputField}
                                    placeholder="Password"
                                    aria-describedby="helpId"
                                />
                                <br />
                                <br />
                                <Field
                                    type="text"
                                    className="auth-form-control"
                                    name="confirmPassword"
                                    component={InputField}
                                    placeholder="Confirm Password"
                                    aria-describedby="helpId"
                                />
                            </div>

                            <Link className="auth-fp" to="/login">Back to Login</Link>
                            <br />
                            <button type="button" className="btn auth-button" type="submit" disabled={resetPasswordVerify.pending}>{resetPasswordVerify.pending ?
                                <div class="spinner-border" role="status">
                                    <span class="sr-only"></span>
                                </div> : "Submit"}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = "Email is Required";
    } else if (values.password.length < 5) {
        errors.password = "Password must be 6 charaters";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Email is Required";
    }
    if (values.password && values.confirmPassword && (values.confirmPassword !== values.password)) {
        errors.confirmPassword = "Password mismatch";
    }
    return errors;
};

function mapStateToProps(state) {
    return {
        resetPasswordVerify: state.auth.resetPasswordVerify
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    };
}


export default reduxForm({
    form: "resetPasswordVerify",
    validate
})(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(ResetPasswordVerify))
);
