import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as chartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { getAdminStats } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader";
import { CLEAR_ERROR } from "../../redux/constants/userConstant";
import { toast } from "react-toastify";

chartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => {
  return (
    <div>
      <h3>
        {title === "Income" && "₹"} {value}
      </h3>
      <p> {title} </p>
    </div>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector((state) => state.adminStats);

  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERROR,
      });
    }
  }, [dispatch, error]);

  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [
          stats?.ordersCount?.preparing,
          stats?.ordersCount?.shipped,
          stats?.ordersCount?.delivered,
        ],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Fragment>
      {loading === true ? (
        <Loader />
      ) : (
        <section className="dashboard">
          <main>
            <article>
              <Box title={"Users"} value={stats?.usersCount} />
              <Box title={"Orders"} value={stats?.ordersCount?.total} />
              <Box title={"Income"} value={stats?.totalIncome} />
            </article>

            <section>
              <div>
                <Link to="/admin/orders">View Orders</Link>
                <Link to="/admin/users">View Users</Link>
              </div>

              <aside>
                <Doughnut data={data} />
              </aside>
            </section>
          </main>
        </section>
      )}
    </Fragment>
  );
};

export default Dashboard;
