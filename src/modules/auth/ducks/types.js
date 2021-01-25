const action_header = "auth/";
// Types 
export default {
  LOGIN: action_header + "LOGIN",
  LOGIN_SUCCESS: action_header + "LOGIN_SUCCESS",
  LOGIN_FAILED: action_header + "LOGIN_FAILED",

  SIGNUP: action_header + "SIGNUP",
  SIGNUP_SUCCESS: action_header + "SIGNUP_SUCCESS",
  SIGNUP_FAILED: action_header + "SIGNUP_FAILED",

  CONFIRM_ACCOUNT: action_header + "CONFIRM_ACCOUNT",
  CONFIRM_ACCOUNT_SUCCESS: action_header + "CONFIRM_ACCOUNT_SUCCESS",
  CONFIRM_ACCOUNT_FAILED: action_header + "CONFIRM_ACCOUNT_FAILED",

  RESET_PASSWORD: action_header + "RESET_PASSWORD",
  RESET_PASSWORD_SUCCESS: action_header + "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILED: action_header + "RESET_PASSWORD_FAILED",
};
