import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import { CLEAR_ERROR, CLEAR_MESSAGE } from "./redux/constants/userConstant";
import { ProtectedRoute } from "protected-route-react";
// import toast, { Toaster } from "react-hot-toast";

// STYLES
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import ScrollToTop from "./components/layout/ScrollToTop";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user, error, message, loading } = useSelector(
    (state) => state.loadUser
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERROR,
      });
    }
    if (!loading && message) {
      toast.success(message);
      dispatch({
        type: CLEAR_MESSAGE,
      });
    }
  }, [dispatch, error, message, loading]);

  return (
    <Router>
      <ToastContainer />
      <Header isAuthenticated={isAuthenticated} />
      <ScrollToTop />
      <Routes>
        <Route exact path="/e-store-react" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user?.role === "admin"}
              redirectAdmin="/me"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
