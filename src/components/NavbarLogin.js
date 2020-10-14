import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

class NavbarLogin extends React.Component {
  render() {
    return (
      <section className="Navbar">
        <div className="container">
          <Link to="/">
            <img className="image" src={logo} alt="Logo"></img>
          </Link>
        </div>
      </section>
    );
  }
}
export default NavbarLogin;
