import React, { Fragment } from "react";
import { motion } from "framer-motion";
// import Me from "../../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { loadUser, logoutUser } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../layout/Loader";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { user } = useSelector((state) => state.loadUser);
  // const { user: myUser  } = useSelector((state) => state.loadUser);
  const { user, loading } = useSelector((state) => state.loadUser);

  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    loadUser();
  }, []);

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/e-store-react");
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <section className="profile">
          <main>
            <motion.img {...options} src={user?.photo} alt="me" />
            <motion.h5 {...options} transition={{ delay: 0.3 }}>
              {user?.name}
            </motion.h5>

            <div>
              <motion.div {...options} transition={{ delay: 0.5 }}>
                <Link to="/admin/dashboard">
                  <MdDashboard /> Dashboard
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link to="/myorders">Orders</Link>
              </motion.div>
            </div>

            <motion.button
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={logOut}
            >
              Logout
            </motion.button>
          </main>
        </section>
      )}
    </Fragment>
  );
};

export default Profile;
