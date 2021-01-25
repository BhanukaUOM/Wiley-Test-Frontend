import React, { Component } from 'react'
import { connect } from "react-redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"
import CoverImage from '../../components/coverImage/CoverImage';

class ResetPasswordVerify extends Component {
    handleSubmit = (values) => {
        const token = new URLSearchParams(this.props.location.search).get("token");
        const email = new URLSearchParams(this.props.location.search).get("email");

        let resetPasswordDto = {
            email: email,
            token: parseInt(token),
            password: values && values.password
        }
        this.props.authActions.resetPasswordVerify(resetPasswordDto)
    }
    render() {
        const { handleSubmit, resetPasswordVerify } = this.props

        return (
            <div className="login-container">
                <div className="auth-container">
                    <CoverImage />
                    <div className="auth-content">
                        <h1>Reset Password</h1>
                        <form
                            onSubmit={handleSubmit(this.handleSubmit)}
                        >
                            <div className="form-group">
                                <br />
                                <Field
                                    type="password"
                                    className="auth-form-control"
                                    name="password"
                                    component={InputField}
                                    placeholder="New Password"
                                    aria-describedby="helpId"
                                    autocomplete="new-password"
                                />
                                <br />
                                <Field
                                    type="password"
                                    className="auth-form-control"
                                    name="confirmPassword"
                                    component={InputField}
                                    placeholder="Confirm Password"
                                    aria-describedby="helpId"
                                    autocomplete="new-password"
                                />
                            </div>
                            <br />
                            <button type="button" className="btn auth-button" type="submit" disabled={resetPasswordVerify.pending}>{resetPasswordVerify.pending ?
                                <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                </div> : <span className="btn-text">SUBMIT</span>}</button>
                        </form>
                        <hr />
                        <div style={{ paddingBottom: 10 }}>
                            <Link className="auth-fp" to="/login">Back to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 charaters";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is Required";
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
