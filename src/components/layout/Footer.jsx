import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <h2>E Store India</h2>
          <p>We are trying to give you the best taste possible.</p>
          <em>We give attention to genuine feedback.</em>
          <strong>All rights received @_iampankaj</strong>
        </div>
        <aside>
          <h4>Follow Us:</h4>

          <a href="http://www.instagram.com">
            <AiFillInstagram />
          </a>
          <a href="http://www.youtube.com">
            <AiFillYoutube />
          </a>
          <a href="http://www.github.com">
            <AiFillGithub />
          </a>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
