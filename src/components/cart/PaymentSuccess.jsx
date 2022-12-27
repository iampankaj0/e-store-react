import React from "react";
import { Link } from "react-router-dom";
import DONE from "../../assets/done.gif";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
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
        <Link to="/myorders">Check Status</Link>
      </motion.main>
    </section>
  );
};

export default PaymentSuccess;
