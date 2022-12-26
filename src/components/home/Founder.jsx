import React from "react";
import { motion } from "framer-motion";
import Me from "../../assets/profile.jpg";

const Founder = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <section className="founder">
      <div className="container">
        <motion.div {...options}>
          <img src={Me} alt="founder" width={200} height={200} />

          <h3>Pankaj Yadav</h3>

          <p>
            Hey Everyone, I am Pankaj Yadav, the founder of E Store India.
            <br /> Our aim is to create the most tasty dishes on planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
