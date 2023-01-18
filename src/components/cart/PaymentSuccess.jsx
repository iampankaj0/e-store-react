import React from "react";
import { Link, useLocation } from "react-router-dom";
import DONE from "../../assets/done.gif";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const paymentMethod = useLocation();

  return (
    <section className="payment_success">
      <motion.main
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <img src={DONE} alt="order_placed-tick" />
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Order Placed
        </motion.h1>
        <motion.p
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Order Placed Successfully, You can check order status below.
        </motion.p>
        {paymentMethod?.state && (
          <p>PAYMENT MODE: {paymentMethod?.state?.paymentMethod}</p>
        )}

        {paymentMethod?.state?.paymentMethod === "Online" && (
          <p>
            PAID AMOUNT:{" "}
            <span style={{ color: "rgb(156, 0, 60)" }}>
              ₹{paymentMethod?.state?.total}
            </span>
          </p>
        )}
        <Link to="/myorders">Check Status</Link>
      </motion.main>
    </section>
  );
};

export default PaymentSuccess;
