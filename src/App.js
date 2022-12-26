import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";

// STYLES
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
