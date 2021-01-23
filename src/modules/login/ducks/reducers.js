import React from "react";
import types from "./types";
import { handleActions } from "redux-actions";

const initialState = {
  product: {
    product:null
  },
};

// Reducers from redux-actions
export default handleActions(
  {
    //---------------------GET PRODUCT -------------------------------//
    [types.GET_PRODUCT]: (state, { payload }) => ({
      ...state,
      product: {
        ...state.product,
        loading: true,
        pending: true,
        hasError: false,
      },
    }),
    [types.GET_PRODUCT_SUCCESS]: (state, { payload }) => ({
      ...state,
      product: {
        ...state.product,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.GET_PRODUCT_FAILED]: (state, { payload }) => ({
      ...state,
      product: {
        ...state.product,
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
