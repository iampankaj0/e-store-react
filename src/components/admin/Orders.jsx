import React, { Fragment, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders, processOrder } from "../../redux/actions/orderAction";
import { toast } from "react-toastify";
import { CLEAR_ERROR, CLEAR_MESSAGE } from "../../redux/constants/orderConstant";
import Loader from "../layout/Loader";

const Orders = () => {
  const dispatch = useDispatch();
  const { loading, orders, error } = useSelector((state) => state.adminOrders);
  const {
    loading: processOrderLoading,
    message,
    error: processOrderError,
  } = useSelector((state) => state.processOrder);

  useEffect(() => {
    dispatch(getAdminOrders());
  }, [dispatch, processOrderLoading]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERROR,
      });
    }
    if (processOrderError) {
      toast.error(processOrderError);
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
  }, [dispatch, error, processOrderError, message]);

  const handleProcessOrder = (orderId) => {
    dispatch(processOrder(orderId));
  };

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
      name: "User",
    },
    {
      id: 7,
      name: "Action",
    },
  ];

  return (
    <Fragment>
      {loading === true || processOrderLoading === true ? (
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
                      <span> {tableHeads[0].name} </span> #{ele?._id}
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
                      <span> {tableHeads[2].name} </span>{" "}
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
                      <span> {tableHeads[5].name} </span> {ele?.user?.name}
                    </td>
                    <td>
                      <span> {tableHeads[6].name} </span>
                      <Link
                        to={`/order/${ele?._id}`}
                        title="View Order Details"
                      >
                        <AiOutlineEye />
                      </Link>
                      <button
                        onClick={() => handleProcessOrder(ele?._id)}
                        title="Change Order Status"
                      >
                        <GiArmoredBoomerang />
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

export default Orders;
