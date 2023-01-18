import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import {
  deleteOrderReducer,
  getAdminOrdersReducer,
  getMyOrdersReducer,
  getOrderDetailsReducer,
  orderReducer,
  processOrderAdmin,
} from "./reducers/orderReducer";
import { paymentReducer } from "./reducers/paymentReducer";
import {
  getAdminStats,
  getAllUsers,
  loadUserReducer,
} from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    loadUser: loadUserReducer,
    cart: cartReducer,
    order: orderReducer,
    payment: paymentReducer,
    myOrders: getMyOrdersReducer,
    orderDetails: getOrderDetailsReducer,
    adminOrders: getAdminOrdersReducer,
    processOrder: processOrderAdmin,
    deleteOrder: deleteOrderReducer,
    users: getAllUsers,
    adminStats: getAdminStats,
  },
});

export default store;

export const server = "http://localhost:4000/api/v1";
// export const server = "https://e-store-apis-448ts14pp-iampankaj0.vercel.app/api/v1";
// export const server = "http://e-store-apis.vercel.app/api/v1";
