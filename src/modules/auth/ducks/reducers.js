import React from "react";
import types from "./types";
import { handleActions } from "redux-actions";
import { initialStateModal } from "../../../utils/Constants";

const initialState = {
  signUp: {
    ...initialStateModal
  },
  login: {
    ...initialStateModal,
  },
  confirmAccount: {
    ...initialStateModal
  },
  resetPassword: {
    ...initialStateModal
  },
  resetPasswordVerify: {
    ...initialStateModal,
  }
};

// Reducers from redux-actions
export default handleActions(
  {
    //---------------------SIGNUP -------------------------------//
    [types.SIGNUP]: (state, { payload }) => ({
      ...state,
      signUp: {
        ...state.signUp,
        loading: true,
        pending: true,
        hasError: false,
      },
    }),
    [types.SIGNUP_SUCCESS]: (state, { payload }) => ({
      ...state,
      signUp: {
        ...state.signUp,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.SIGNUP_FAILED]: (state, { payload }) => ({
      ...state,
      signUp: {
        ...state.signUp,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
    //-------------------------------------------------------
    //---------------------LOGIN -------------------------------//
    [types.LOGIN]: (state, { payload }) => ({
      ...state,
      login: {
        ...state.login,
        loading: true,
        pending: true,
        hasError: false,
      },
    }),
    [types.LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      login: {
        ...state.login,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.LOGIN_FAILED]: (state, { payload }) => ({
      ...state,
      login: {
        ...state.login,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
    //-------------------------------------------------------
    //---------------------LOGIN -------------------------------//
    [types.CONFIRM_ACCOUNT]: (state, { payload }) => ({
      ...state,
      confirmAccount: {
        ...state.confirmAccount,
        loading: true,
        pending: true,
        hasError: false,
      },
    }),
    [types.CONFIRM_ACCOUNT_SUCCESS]: (state, { payload }) => ({
      ...state,
      confirmAccount: {
        ...state.confirmAccount,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.CONFIRM_ACCOUNT_FAILED]: (state, { payload }) => ({
      ...state,
      confirmAccount: {
        ...state.confirmAccount,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
    //-------------------------------------------------------
    //---------------------RESET PASSWORD -------------------------------//
    [types.RESET_PASSWORD]: (state, { payload }) => ({
      ...state,
      resetPassword: {
        ...state.resetPassword,
        loading: true,
        pending: true,
        hasError: false,
      },
    }),
    [types.RESET_PASSWORD_SUCCESS]: (state, { payload }) => ({
      ...state,
      resetPassword: {
        ...state.resetPassword,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.RESET_PASSWORD_FAILED]: (state, { payload }) => ({
      ...state,
      resetPassword: {
        ...state.resetPassword,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
    //-------------------------------------------------------

    //---------------------RESET PASSWORD -------------------------------//
    [types.RESET_PASSWORD_VERIFY]: (state, { payload }) => ({
      ...state,
      resetPasswordVerify: {
        ...state.resetPasswordVerify,
        loading: true,
        pending: true,
        hasError: false,
      },
    }),
    [types.RESET_PASSWORD_VERIFY_SUCCESS]: (state, { payload }) => ({
      ...state,
      resetPasswordVerify: {
        ...state.resetPasswordVerify,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.RESET_PASSWORD_VERIFY_FAILED]: (state, { payload }) => ({
      ...state,
      resetPasswordVerify: {
        ...state.resetPasswordVerify,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
    //-------------------------------------------------------
  },
  initialState
);
