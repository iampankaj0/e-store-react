import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form>
        <h2>Contact Us</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." rows="10" cols="30" />
        <button type="submit">Send</button>
      </motion.form>
    </section>
  );
};

export default Contact;
