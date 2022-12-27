import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2>Contact Us</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." rows="7" cols="30" />
        <button type="submit">Send</button>
      </motion.form>
    </section>
  );
};

export default Contact;
