import axios from "axios";
import {
  CLEAR_ERROR,
  CLEAR_MESSAGE,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_SUCCESS,
  ADMIN_STATS_REQUEST,
  ADMIN_STATS_SUCCESS,
  ADMIN_STATS_FAIL,
} from "../constants/userConstant";
import { server } from "../store";

// REGISTER USER OR LOGIN
export const registerUser = () => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const { data } = await axios.get(`${server}/googlelogin`, {
      withCredentials: true,
    });

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOGOUT USER
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_USER_REQUEST,
    });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: LOGOUT_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOAD USERDATA
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET ALL USERS
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USER_REQUEST,
    });

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });

    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET ALL USERS
export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_STATS_REQUEST,
    });

    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });

    dispatch({
      type: ADMIN_STATS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_STATS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// CLEAR ERROR ACTION FUNCTION
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

// CLEAR MESSAGE ACTION FUNCTION
export const clearMessage = () => async (dispatch) => {
  dispatch({ type: CLEAR_MESSAGE });
};
