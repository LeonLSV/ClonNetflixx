import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./styles/Navbar.css";

const Navbar = (props) => {
  // props.history = "/Home";
  return (
    <section className="Navbar">
      <div className="container">
        <Link to="/">
          <img className="image" src={logo} alt="Logo"></img>
        </Link>
        <Link to="/Home/Login" className="button">
          Iniciar Sesión
        </Link>
      </div>
    </section>
  );
};
export default Navbar;
// export default connect(null, null)(Navbar);
