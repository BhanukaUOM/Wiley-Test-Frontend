import React, { Component } from 'react'
import { connect } from "react-redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
// import "./Login.css"
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"

class ForgotPassword extends Component {
    handleSubmit = (values) => {
        console.log("handleSubmit", this.props)
        let resetPasswordDto = {
            email: values.email
        }
        this.props.authActions.resetPassword(resetPasswordDto)
        // this.props.history.push("/register")
    }
    render() {
        const { handleSubmit } = this.props

        return (
            <div className="login-container">
                <div className="auth-container">
                    <div className="auth-image">
                        <h1>Welcome To <span className="auth-span">Wiley</span></h1>
                    </div>
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
                                    placeholder="your email address"
                                    aria-describedby="helpId"
                                    autoComplete="on"

                                />
                            </div>

                            <br />
                            <button type="button" className="btn auth-button" type="submit">Submit</button>

                            <hr />
                            <Link className="auth-fp" to="/login">Back to Login</Link>

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
    return errors;
};

function mapStateToProps(state) {
    return {
        ...state
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
