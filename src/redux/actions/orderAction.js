import axios from "axios";
import {
  ADMIN_ORDER_FAIL,
  ADMIN_ORDER_REQUEST,
  ADMIN_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GET_MY_ORDER_FAIL,
  GET_MY_ORDER_REQUEST,
  GET_MY_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  PROCESS_ORDER_FAIL,
  PROCESS_ORDER_REQUEST,
  PROCESS_ORDER_SUCCESS,
} from "../constants/orderConstant";
import { server } from "../store";

export const createOrder =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "ORDER_REQUEST",
      });

      const { data } = await axios.post(
        `${server}/createorder`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "ORDER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ORDER_FAIL",
        payload: error.response.data.message,
      });
    }
  };

// GET MY ORDERS
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_MY_ORDER_REQUEST,
    });

    const { data } = await axios.get(`${server}/myorders`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: GET_MY_ORDER_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: GET_MY_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET ORDER DETAILS
export const getOrderDetails = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${server}/order/${orderId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET ADMIN ORDERS - ADMIN
export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ORDER_REQUEST,
    });

    const { data } = await axios.get(`${server}/admin/orders`, {
      withCredentials: true,
    });

    dispatch({
      type: ADMIN_ORDER_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// PROCESS ORDER _ ADMIN
export const processOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: PROCESS_ORDER_REQUEST,
    });

    const { data } = await axios.get(`${server}/admin/order/${orderId}`, {
      withCredentials: true,
    });

    dispatch({
      type: PROCESS_ORDER_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: PROCESS_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};


// PROCESS ORDER _ ADMIN
export const deleteOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ORDER_REQUEST,
    });

    const { data } = await axios.get(`${server}/order/delete/${orderId}`, {
      withCredentials: true,
    });

    dispatch({
      type: DELETE_ORDER_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};
