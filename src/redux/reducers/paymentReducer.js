import {
    CLEAR_ERROR,
  CLEAR_MESSAGE,
  PAYMENT_FAIL,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
} from "../constants/paymentConstant";

export const paymentReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return {
        loading: true,
      };

    case PAYMENT_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };

    case PAYMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };

    default:
      return state;
  }
};
