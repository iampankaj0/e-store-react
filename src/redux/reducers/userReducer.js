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
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  ADMIN_STATS_REQUEST,
  ADMIN_STATS_SUCCESS,
  ADMIN_STATS_FAIL,
} from "../constants/userConstant";

export const loadUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        isAuthenticated: false,
        user: null,
        loading: true,
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAuthenticated: false,
        message: action.payload.message,
      };
    case LOAD_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.payload?.user,
        loading: false,
        message: action.payload.message,
      };
    case LOAD_USER_FAIL:
    case REGISTER_USER_FAIL:
    case LOGOUT_USER_FAIL:
      return {
        isAuthenticated: false,
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

// GET ALL USERS
export const getAllUsers = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
      return {
        loading: false,
        users: null,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case GET_ALL_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// GET ADMIN STATS
export const getAdminStats = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_STATS_REQUEST:
      return {
        loading: true,
        stats: null,
      };
    case ADMIN_STATS_SUCCESS:
      return {
        loading: false,
        stats: action.payload,
      };
    case ADMIN_STATS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
