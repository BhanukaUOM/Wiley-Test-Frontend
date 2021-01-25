import React, { Component } from 'react'
import { connect } from "react-redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"
import CoverImage from '../../components/coverImage/CoverImage';

class ForgotPassword extends Component {
    handleSubmit = (values) => {
        let resetPasswordDto = {
            email: values.email
        }
        this.props.authActions.resetPassword(resetPasswordDto)
    }
    render() {
        const { handleSubmit, resetPassword } = this.props

        return (
            <div className="login-container">
                <div className="auth-container">
                    <CoverImage />
                    <div className="auth-content">
                        <h1>Forgot Password</h1>
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
                                    placeholder="Your email address"
                                    aria-describedby="helpId"
                                    autoComplete="on"

                                />
                            </div>
                            <button type="button" className="btn auth-button" type="submit" disabled={resetPassword.pending}>
                                {resetPassword.pending ?
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"></span>
                                    </div> : <span className="btn-text">SUBMIT</span>}</button>
                        </form>
                        <br />

                        <hr />
                        <div>
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
    if (!values.email) {
        errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email";
    }
    return errors;
};

function mapStateToProps(state) {
    return {
        resetPassword: state.auth.resetPassword
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    };
}


export default reduxForm({
    form: "forgotPassword",
    validate
})(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(ForgotPassword))
);
