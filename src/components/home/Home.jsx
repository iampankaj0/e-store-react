import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const animationOptions = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <>
      <section className="home">
        <div className="container">
          <div>
            <motion.h1 {...animationOptions}>E Store India</motion.h1>
            <motion.p {...animationOptions} transition={{ delay: 0.2 }}>
              Give yourself the branded groceries.
            </motion.p>
          </div>
          <motion.a
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            href="#menu"
          >
            Explore Menu
          </motion.a>
        </div>
      </section>

      {/* FOUNDER START */}
      <Founder />
      {/* FOUNDER ENDS */}

      {/* MENU START */}
      <Menu />
      {/* MENU ENDS */}
    </>
  );
};

export default Home;
