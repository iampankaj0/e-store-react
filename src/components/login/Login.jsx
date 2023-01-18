import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";

const Login = () => {
  const handleLogin = () => {
    window.open(`${server}/googlelogin`, "_self");
  };

  return (
    <section className="login">
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={handleLogin}
      >
        Login With Google <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
