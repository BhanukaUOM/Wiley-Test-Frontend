import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"

class SignUp extends Component {

    handleSubmit = (values) => {
        let sugnUpDto = {
            email: values && values.email,
            name: values && values.name,
            password: values && values.password
        }
        this.props.authActions.signUp(sugnUpDto)
    }
    render() {
        const { handleSubmit, signUp } = this.props
        return (
            <div className="login-container" >
                <div className="auth-container">
                    <div className="auth-image">
                        <h1>Welcome To <span className="auth-span">Wiley</span></h1>
                    </div>
                    <div className="auth-content">
                        <h1>Sign Up</h1>
                        <form
                            onSubmit={handleSubmit(this.handleSubmit)}
                            style={{ margin: 30 }}
                        >
                            <div className="form-group">
                                <br />
                                <Field
                                    type="text"
                                    className="auth-form-control"
                                    name="name"
                                    component={InputField}
                                    placeholder="name"
                                    aria-describedby="helpId"
                                    autoComplete
                                />
                            </div>
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
                            <div className="form-group">
                                <br />
                                <Field
                                    type="password"
                                    className="auth-form-control"
                                    name="confirmPassword"
                                    component={InputField}
                                    placeholder="Confirm Password"
                                    aria-describedby="helpId"
                                    autoComplete

                                />
                            </div>

                            <br />
                            <button type="button" className="btn auth-button" type="submit" disabled={signUp.pending}>{signUp.pending ?
                                <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                </div> : "Signup"}</button>

                            <hr />
                            <Link className="auth-fp" to="/sign-in">Sign In</Link>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Name is Required";
    }
    if (!values.email) {
        errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email";
    }
    if (!values.password) {
        errors.password = "Password is Required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
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
        signUp: state.auth.signUp
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    };
}

export default reduxForm({
    form: "SignUp",
    validate
})(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(SignUp))
);
