// Actions
import { createAction } from "redux-actions";
import types from "./types";

export default {
  login: createAction(types.LOGIN),
  loginSuccess: createAction(types.LOGIN_SUCCESS),
  loginFailed: createAction(types.LOGIN_FAILED),

  register: createAction(types.REGISTER),
  registerSuccess: createAction(types.REGISTER_SUCCESS),
  registerFail: createAction(types.REGISTER_FAILED),
};
