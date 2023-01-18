import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrder } from "../../redux/actions/orderAction";
import { confirmPayment } from "../../redux/actions/paymentAction";
import {
  CLEAR_ERROR,
  CLEAR_MESSAGE,
} from "../../redux/constants/orderConstant";
import { server } from "../../redux/store";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);

  const { message: orderMessage, error: orderError } = useSelector(
    (state) => state.order
  );

  const {
    message: paymentMessage,
    error: paymentError,
    loading: paymentLoading,
  } = useSelector((state) => state.payment);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (paymentMethod === "COD") {
      setDisableBtn(true);
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    } else {
      setDisableBtn(true);
      const {
        data: { order, orderOptions },
      } = await axios.post(
        `${server}/createorderonline`,
        {
          shippingInfo,
          orderItems: cartItems,
          paymentMethod,
          itemsPrice: subTotal,
          taxPrice: tax,
          shippingCharges,
          totalAmount: total,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const options = {
        key: "rzp_test_8HgcY0sZG6BwN3", // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "E Store India",
        description: "E Store India Transaction",
        // image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          dispatch(
            confirmPayment(
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
              orderOptions
            )
          );
        },
        theme: {
          color: "#9c003c",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  useEffect(() => {
    if (orderError) {
      toast.error(orderError);
      dispatch({
        type: CLEAR_ERROR,
      });
      setDisableBtn(false);
    }
    if (orderMessage) {
      toast.success(orderMessage);
      dispatch({
        type: CLEAR_MESSAGE,
      });
      dispatch({
        type: "EMPTY_CART",
      });
      navigate("/paymentsuccess", { state: { paymentMethod, total } });
    }
    if (paymentError) {
      toast.error(paymentError);
      dispatch({
        type: CLEAR_ERROR,
      });
      setDisableBtn(false);
    }
    if (paymentMessage) {
      toast.success(paymentMessage);
      dispatch({
        type: CLEAR_MESSAGE,
      });
      dispatch({
        type: "EMPTY_CART",
      });
      navigate("/paymentsuccess", { state: { paymentMethod, total } });
    }
  }, [
    orderError,
    dispatch,
    orderMessage,
    navigate,
    paymentMethod,
    total,
    paymentError,
    paymentMessage,
  ]);

  return (
    <section className="confirm_order">
      <main>
        <h1>Confirm Order</h1>

        <form>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={(e) => setPaymentMethod("COD")}
            />
          </div>
          <div>
            <label>Online</label>
            <input
              type="radio"
              name="payment"
              onChange={(e) => setPaymentMethod("Online")}
            />
          </div>
          <button
            disabled={disableBtn}
            style={{
              color: disableBtn ? "white" : "",
              backgroundColor: disableBtn ? "grey" : "",
              cursor: disableBtn ? "not-allowed" : "",
            }}
            onClick={submitHandler}
            type="submit"
          >
            {paymentLoading ? "Loading..." : "Place Order"}
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
