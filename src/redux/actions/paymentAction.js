import axios from "axios";
import {
  PAYMENT_FAIL,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
} from "../constants/paymentConstant";
import { server } from "../store";

export const confirmPayment =
  (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PAYMENT_REQUEST,
      });

      const { data } = await axios.post(
        `${server}/paymentverification`,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          orderOptions,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: PAYMENT_SUCCESS,
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: PAYMENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
