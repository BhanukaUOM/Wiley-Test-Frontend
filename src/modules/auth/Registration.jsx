import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "./ducks";
import { Field, reduxForm } from "redux-form";
import { InputField } from '../../components/controls/Fields';
import { Link, withRouter } from "react-router-dom"
import { NotificationManager } from "react-notifications";
class Registration extends Component {

    handleSubmit = (values) => {
        let sugnUpDto = {
            email: values && values.email,
            name: values && values.name,
            password: values && values.password
        }
        console.log("sugnUpDto", sugnUpDto)

        // NotificationManager.info("Please login to the system", "Registration");

        // this.props.history.push("/dashboard")
        this.props.authActions.signUp(sugnUpDto)
    }
    render() {
        const { handleSubmit, signUp } = this.props
        console.log("🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ render ~ signUp", signUp)

        return (
            <div className="login-container">
                <div className="auth-container">
                    <div className="image">
                        <h1>Welcome To <span>Wiley</span></h1>
                    </div>
                    <div className="content">
                        <h1>Registration</h1>
                        <form
                            onSubmit={handleSubmit(this.handleSubmit)}
                            style={{ margin: 30 }}
                        >
                            <div className="form-group">
                                <label htmlFor>Name</label>
                                <br />
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    component={InputField}
                                    placeholder="name@user.com"
                                    id="txt" aria-describedby="helpId"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor>UserName</label>
                                <br />
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="email"
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
                            <div className="form-group">
                                <label htmlFor>Confirm Password</label>
                                <br />
                                <Field
                                    type="password"
                                    className="form-control"
                                    name="confirmPassword"
                                    component={InputField}
                                    placeholder="Password"
                                    id="txt" aria-describedby="helpId"
                                />
                            </div>

                            <Link className="fp" to="/login">Login</Link>
                            <br />
                            <button type="button" className="btn" type="submit" disabled={signUp.pending}>{signUp.pending ?
                                <div class="spinner-border" role="status">
                                    <span class="sr-only"></span>
                                </div> : "Signup"}</button>
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
        errors.username = "Email is Required";
    }
    if (!values.password) {
        errors.password = "Password is Required";
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
    form: "registration",
    // validate
})(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withRouter(Registration))
);
