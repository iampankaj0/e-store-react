import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrderDetails } from "../../redux/actions/orderAction";
import { CLEAR_ERROR } from "../../redux/constants/orderConstant";
import Loader from "../layout/Loader";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector(
    (state) => state.orderDetails
  );

  const { id: orderId } = useParams();

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch({
        type: CLEAR_ERROR,
      });
    }
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading === true ? (
        <Loader />
      ) : (
        <section className="order__details">
          <main className="container">
            <h1>Order Details</h1>

            <div>
              <h1>Shipping</h1>
              <p>
                <b>Address</b>
                {orderDetails?.shippingInfo?.hNo},{" "}
                {orderDetails?.shippingInfo?.city},{" "}
                {orderDetails?.shippingInfo?.state},{" "}
                {orderDetails?.shippingInfo?.country},{" "}
                {orderDetails?.shippingInfo?.pinCode}
              </p>
            </div>

            <div>
              <h1>Contact</h1>
              <p>
                <b>Name</b>
                {orderDetails?.user?.name}
              </p>
              <p>
                <b>Phone</b>
                {orderDetails?.shippingInfo?.phoneNo}
              </p>
            </div>

            <div>
              <h1>Status</h1>
              <p style={{ display: "flex" }}>
                <b>Order Status</b>
                <p
                  style={{ margin: "0" }}
                  className={
                    orderDetails?.orderStatus === "Preparing"
                      ? "red"
                      : orderDetails?.orderStatus === "Shipped"
                      ? "yellow"
                      : "green"
                  }
                >
                  {orderDetails?.orderStatus}
                </p>
              </p>
              <p>
                <b>Placed At</b>
                {orderDetails?.createdAt.split("T")[0]}
              </p>
              <p>
                <b>Delivered At</b>
                {orderDetails?.deliveredAt?.split("T")[0] ?? "NA"}
              </p>
            </div>

            <div>
              <h1>Payment</h1>
              <p style={{ display: "flex" }}>
                <b>Payment Method</b>
                <p
                  className={
                    orderDetails?.paymentMethod === "Online" ? "green" : "red"
                  }
                  style={{ margin: "0" }}
                >
                  {orderDetails?.paymentMethod}
                </p>
              </p>
              {orderDetails?.paymentMethod === "Online" && (
                <p>
                  <b>Payment Reference</b>#{orderDetails?.paymentInfo}
                </p>
              )}
              {orderDetails?.paymentMethod === "Online" && (
                <p>
                  <b>Paid At</b>
                  {orderDetails?.paidAt.split("T")[0]}
                </p>
              )}
            </div>

            <div>
              <h1>Amount</h1>
              <p>
                <b>Items Total</b>₹{" "}
                {orderDetails?.orderItems?.cheeseBurger?.quantity *
                  orderDetails?.orderItems?.cheeseBurger?.price +
                  orderDetails?.orderItems?.vegCheeseBurger?.quantity *
                    orderDetails?.orderItems?.vegCheeseBurger?.price +
                  orderDetails?.orderItems?.burgerWithFries?.quantity *
                    orderDetails?.orderItems?.burgerWithFries?.price}
              </p>
              <p>
                <b>Shipping Charges</b>₹{orderDetails?.shippingCharges}
              </p>
              <p>
                <b>Tax</b>₹{orderDetails?.taxPrice}
              </p>
              <p>
                <b>Total Amount</b>₹{orderDetails?.totalAmount}
              </p>
            </div>

            <article>
              <h1>Ordered Items</h1>

              <div>
                <h4>Cheese Burger</h4>
                <div>
                  <span>
                    {orderDetails?.orderItems?.cheeseBurger?.quantity}
                  </span>{" "}
                  X<span>₹{orderDetails?.orderItems?.cheeseBurger?.price}</span>
                </div>
              </div>
              <div>
                <h4>Veg Cheese Burger</h4>
                <div>
                  <span>
                    {orderDetails?.orderItems?.vegCheeseBurger?.quantity}
                  </span>{" "}
                  X
                  <span>
                    ₹{orderDetails?.orderItems?.vegCheeseBurger?.price}
                  </span>
                </div>
              </div>
              <div>
                <h4>Burger With French Fries</h4>
                <div>
                  <span>
                    {orderDetails?.orderItems?.burgerWithFries?.quantity}
                  </span>{" "}
                  X
                  <span>
                    ₹{orderDetails?.orderItems?.burgerWithFries?.price}
                  </span>
                </div>
              </div>
              <div>
                <h4>Sub Total</h4>
                <div>
                  ₹
                  {orderDetails?.orderItems?.cheeseBurger?.quantity *
                    orderDetails?.orderItems?.cheeseBurger?.price +
                    orderDetails?.orderItems?.vegCheeseBurger?.quantity *
                      orderDetails?.orderItems?.vegCheeseBurger?.price +
                    orderDetails?.orderItems?.burgerWithFries?.quantity *
                      orderDetails?.orderItems?.burgerWithFries?.price}
                </div>
              </div>
            </article>
          </main>
        </section>
      )}
    </Fragment>
  );
};

export default OrderDetails;
