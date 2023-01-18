import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        cheeseBurger: {
          price: 200,
          quantity: 0,
        },
        vegCheeseBurger: {
          price: 260,
          quantity: 0,
        },
        burgerWithFries: {
          price: 500,
          quantity: 0,
        },
      },

  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: {},
};

export const cartReducer = createReducer(initialState, {
  INCREASE_CHEESE_BURGER: (state) => {
    state.cartItems.cheeseBurger.quantity += 1;
  },
  INCREASE_VEGCHEESE_BURGER: (state) => {
    state.cartItems.vegCheeseBurger.quantity += 1;
  },
  INCREASE_BURGER_WITH_FRIES: (state) => {
    state.cartItems.burgerWithFries.quantity += 1;
  },
  DECREASE_CHEESE_BURGER: (state) => {
    state.cartItems.cheeseBurger.quantity -= 1;
  },
  DECREASE_VEGCHEESE_BURGER: (state) => {
    state.cartItems.vegCheeseBurger.quantity -= 1;
  },
  DECREASE_BURGER_WITH_FRIES: (state) => {
    state.cartItems.burgerWithFries.quantity -= 1;
  },

  CALCULATE_PRICE: (state) => {
    state.subTotal =
      state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
      state.cartItems.vegCheeseBurger.price *
        state.cartItems.vegCheeseBurger.quantity +
      state.cartItems.burgerWithFries.price *
        state.cartItems.burgerWithFries.quantity;

    state.tax = state.subTotal * 0.05;
    state.shippingCharges = state.subTotal > 600 ? 0 : 40;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  EMPTY_CART: (state) => {
    state.cartItems = {
      cheeseBurger: {
        price: 200,
        quantity: 0,
      },
      vegCheeseBurger: {
        price: 260,
        quantity: 0,
      },
      burgerWithFries: {
        price: 500,
        quantity: 0,
      },
    };
    state.subTotal = 0;
    state.tax = 0;
    state.shippingCharges = 0;
    state.total = 0;
  },

  ADD_SHIPPING_INFO: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      country: action.payload.country,
      state: action.payload.state,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
