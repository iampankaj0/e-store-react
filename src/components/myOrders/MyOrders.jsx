import React, { Fragment } from "react";
import { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteOrder, getMyOrders } from "../../redux/actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_ERROR,
  CLEAR_MESSAGE,
} from "../../redux/constants/orderConstant";
import { toast } from "react-toastify";
import Loader from "../layout/Loader";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, error, loading } = useSelector((state) => state.myOrders);

  const {
    message,
    error: deleteOrderError,
    loading: deleteOrderLoading,
  } = useSelector((state) => state.deleteOrder);

  const tableHeads = [
    {
      id: 1,
      name: "Order Id",
    },
    {
      id: 2,
      name: "Status",
    },
    {
      id: 3,
      name: "Item Qty",
    },
    {
      id: 4,
      name: "Amount",
    },
    {
      id: 5,
      name: "Payment Method",
    },
    {
      id: 6,
      name: "Action",
    },
  ];

  // DELETE ORDER FUNCTION
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  // GET ALL ORDERS
  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch, deleteOrderLoading]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERROR,
      });
    }
    if (deleteOrderError) {
      toast.error(deleteOrderError);
      dispatch({
        type: CLEAR_ERROR,
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: CLEAR_MESSAGE,
      });
    }
  }, [error, dispatch, message, deleteOrderError]);

  return (
    <Fragment>
      {loading === true || deleteOrderLoading === true ? (
        <Loader />
      ) : (
        <section className="tableClass">
          <main className="container">
            <table className="table-responsive">
              <thead>
                <tr>
                  {tableHeads &&
                    tableHeads.map((item) => (
                      <th key={item.id}> {item.name} </th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {orders?.map((ele) => (
                  <tr key={ele._id}>
                    <td>
                      <span> {tableHeads[0].name} </span> #{ele._id}
                    </td>
                    <td>
                      <span> {tableHeads[1].name} </span>
                      <p
                        className={
                          ele?.orderStatus === "Preparing"
                            ? "red"
                            : ele?.orderStatus === "Shipped"
                            ? "yellow"
                            : "green"
                        }
                        style={{ margin: "0" }}
                      >
                        {ele?.orderStatus}
                      </p>
                    </td>
                    <td>
                      <span> {tableHeads[2].name} </span>
                      {ele?.orderItems?.cheeseBurger?.quantity +
                        ele?.orderItems?.vegCheeseBurger?.quantity +
                        ele?.orderItems?.burgerWithFries?.quantity}
                    </td>
                    <td>
                      <span> {tableHeads[3].name} </span> ₹ {ele?.totalAmount}
                    </td>
                    <td>
                      <span> {tableHeads[4].name} </span>{" "}
                      <p
                        className={
                          ele?.paymentMethod === "Online" ? "green" : "red"
                        }
                        style={{ margin: "0" }}
                      >
                        {ele?.paymentMethod}
                      </p>
                    </td>
                    <td>
                      <span> {tableHeads[5].name} </span>
                      <Link to={`/order/${ele?._id ?? "orderIdNotFound"}`}>
                        <AiOutlineEye />
                      </Link>
                      <button onClick={() => handleDeleteOrder(ele?._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </section>
      )}
    </Fragment>
  );
};

export default MyOrders;
