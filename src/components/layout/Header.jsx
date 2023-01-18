import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isAuthenticated = false }) => {
  const [openToggle, setOpenToggle] = useState(false);

  return (
    <nav
      style={{
        borderRadius: openToggle ? "0" : "",
        borderTop: openToggle ? "1px solid red" : "",
      }}
    >
      <div>
        <Link className="logo_direct" to="/e-store-react">
          <IoFastFoodOutline />
        </Link>
      </div>
      <div className={openToggle ? "nav_links show-nav_links" : "nav_links"}>
        <NavLink exact to="/e-store-react">
          Home
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">
          <BsCartFill />
        </NavLink>
        <NavLink to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </NavLink>
      </div>
      <div className="nav_toggle_btn">
        {!openToggle ? (
          <GiHamburgerMenu
            title="Open Menu"
            onClick={() => setOpenToggle(!openToggle)}
          />
        ) : (
          <MdOutlineClose
            title="Close Menu"
            onClick={() => setOpenToggle(!openToggle)}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
