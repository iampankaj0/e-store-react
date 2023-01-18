import {
  CLEAR_ERROR,
  CLEAR_MESSAGE,
  ORDER_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  GET_MY_ORDER_REQUEST,
  GET_MY_ORDER_SUCCESS,
  GET_MY_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ADMIN_ORDER_REQUEST,
  ADMIN_ORDER_SUCCESS,
  ADMIN_ORDER_FAIL,
  PROCESS_ORDER_REQUEST,
  PROCESS_ORDER_SUCCESS,
  PROCESS_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
} from "../constants/orderConstant";

// CREATE ORDER
export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        loading: true,
      };

    case ORDER_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };

    case ORDER_FAIL:
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

// GET MY ORDERS - USER
export const getMyOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MY_ORDER_REQUEST:
      return {
        loading: true,
        orders: null,
      };
    case GET_MY_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case GET_MY_ORDER_FAIL:
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

// GET ORDER DETAILS - USER
export const getOrderDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        loading: true,
        orderDetails: null,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        orderDetails: action.payload,
      };
    case ORDER_DETAILS_FAIL:
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

// GET ORDER DETAILS - USER
export const getAdminOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case ADMIN_ORDER_REQUEST:
      return {
        loading: true,
        orders: null,
      };
    case ADMIN_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ADMIN_ORDER_FAIL:
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

// PROCESS ORDER - ADMIN
export const processOrderAdmin = (state = {}, action) => {
  switch (action.type) {
    case PROCESS_ORDER_REQUEST:
      return {
        loading: true,
        message: null,
      };
    case PROCESS_ORDER_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case PROCESS_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
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

// DELETE ORDER - USER
export const deleteOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ORDER_REQUEST:
      return {
        loading: true,
        message: null,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case DELETE_ORDER_FAIL:
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
