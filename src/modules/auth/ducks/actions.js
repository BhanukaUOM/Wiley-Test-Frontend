// Actions
import { createAction } from "redux-actions";
import types from "./types";

export default {
  login: createAction(types.LOGIN),
  loginSuccess: createAction(types.LOGIN_SUCCESS),
  loginFailed: createAction(types.LOGIN_FAILED),

  signUp: createAction(types.SIGNUP),
  signUpSuccess: createAction(types.SIGNUP_SUCCESS),
  signUpFail: createAction(types.SIGNUP_FAILED),

  confirmAccount: createAction(types.CONFIRM_ACCOUNT),
  confirmAccountSuccess: createAction(types.CONFIRM_ACCOUNT_SUCCESS),
  confirmAccountFail: createAction(types.CONFIRM_ACCOUNT_FAILED),
};
