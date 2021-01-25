import { createLogic } from "redux-logic";
import actions from "./actions";
import types from "./types";
import EndPoints from "../../../utils/EndPoints";
import API from "../../../utils/HTTPClient";
import { NotificationManager } from "react-notifications";
import history from "../../../_helpers/history"
import { reset } from "redux-form";

const signUp = createLogic({
    type: types.SIGNUP,
    latest: true,
    debounce: 1000,

    process({ MockHTTPClient, getState, action }, dispatch, done) {
        let HTTPClient;
        if (MockHTTPClient) {
            HTTPClient = MockHTTPClient;
        } else {
            HTTPClient = API;
        }
        HTTPClient.Post(EndPoints.signup, action.payload)
            .then((resp) => resp.data)
            .then((data) => {
                NotificationManager.success(data.message || "Success full sign up..!", "Success");
                dispatch(actions.signUpSuccess(data));
                setTimeout(() => {
                    history.push("/login")
                }, 2500);
            })
            .catch((err) => {
                let error = err && err.response && err.response.data
                NotificationManager.error(error.message || "Something went wrong..!", error.error || "Fail");

                dispatch(
                    actions.signUpFail({
                        title: "Error!",
                        message: error,
                    })
                );
            })
            .then(() => done());
    },
});

const login = createLogic({
    type: types.LOGIN,
    latest: true,
    debounce: 1000,

    process({ MockHTTPClient, getState, action }, dispatch, done) {
        let HTTPClient;
        if (MockHTTPClient) {
            HTTPClient = MockHTTPClient;
        } else {
            HTTPClient = API;
        }
        HTTPClient.Post(EndPoints.login, action.payload)
            .then((resp) => resp.data)
            .then((data) => {
                localStorage.setItem("token", JSON.stringify(data.accessToken));
                localStorage.setItem("user", JSON.stringify(data.user));
                NotificationManager.success(data.message || "Success full sign up..!", "Success");
                setTimeout(() => {
                    history.push("/dashboard")
                }, 1500);
                dispatch(actions.loginSuccess(data));


            })
            .catch((err) => {
                let error = err && err.response && err.response.data
                NotificationManager.error(error.message || "Something went wrong..!", error.error || "Fail");
                dispatch(
                    actions.loginFailed({
                        title: "Error!",
                        message: error,
                    })
                );
            })
            .then(() => done());
    },
});

const confirmAccount = createLogic({
    type: types.CONFIRM_ACCOUNT,
    latest: true,
    debounce: 1000,

    process({ MockHTTPClient, getState, action }, dispatch, done) {
        let HTTPClient;
        if (MockHTTPClient) {
            HTTPClient = MockHTTPClient;
        } else {
            HTTPClient = API;
        }

        HTTPClient.Get(EndPoints.confirmAccount + `?token=${action.payload}`)
            .then((resp) => resp.data)
            .then((data) => {
                NotificationManager.success(data.message || "Confirm Account Success", "Success");
                dispatch(actions.confirmAccountSuccess(data));
                setTimeout(() => {
                    history.push("/dashboard")
                }, 1500);
            })
            .catch((err) => {
                let error = err && err.response && err.response.data
                NotificationManager.error(error || "Something went wrong..!", error.error || "Fail");
                dispatch(
                    actions.confirmAccountFail({
                        title: "Error!",
                        message: error,
                    })
                );
            })
            .then(() => done());
    },
});

const resetPassword = createLogic({
    type: types.RESET_PASSWORD,
    latest: true,
    debounce: 1000,

    process({ MockHTTPClient, getState, action }, dispatch, done) {
        let HTTPClient;
        if (MockHTTPClient) {
            HTTPClient = MockHTTPClient;
        } else {
            HTTPClient = API;
        }

        HTTPClient.Post(EndPoints.resetPassword, action.payload)
            .then((resp) => resp.data)
            .then((data) => {
                NotificationManager.success(data.message || "Confirm Account Success", "Success");
                dispatch(reset("forgotPassword"));
                dispatch(actions.resetPasswordSuccess(data));
                setTimeout(() => {
                    history.push("/login")
                }, 1500);
            })
            .catch((err) => {
                let error = err && err.response && err.response.data
                NotificationManager.error(error && error.message || "Something went wrong..!", "Fail");

                dispatch(
                    actions.resetPasswordFail({
                        title: "Error!",
                        message: error,
                    })
                );
            })
            .then(() => done());
    },
});

const resetPasswordVerify = createLogic({
    type: types.RESET_PASSWORD_VERIFY,
    latest: true,
    debounce: 1000,

    process({ MockHTTPClient, getState, action }, dispatch, done) {
        let HTTPClient;
        if (MockHTTPClient) {
            HTTPClient = MockHTTPClient;
        } else {
            HTTPClient = API;
        }
        HTTPClient.Post(EndPoints.resetPasswordVerify, action.payload)
            .then((resp) => resp.data)
            .then((data) => {
                NotificationManager.success(data.message || "Confirm Account Success", "Success");
                dispatch(reset("forgotPassword"));
                dispatch(actions.resetPasswordVerifySuccess(data));
            })
            .catch((err) => {
                let error = err && err.response && err.response.data
                NotificationManager.error(error && error.message || "Something went wrong..!", "Fail");

                dispatch(
                    actions.resetPasswordVerifyFail({
                        title: "Error!",
                        message: error,
                    })
                );
            })
            .then(() => done());
    },
});

export default [signUp, login, confirmAccount, resetPassword, resetPasswordVerify];
