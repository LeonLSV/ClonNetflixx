import React from "react";
import "./styles/HomeLanding.css";

import { connect } from "react-redux";
import { loginRequest } from "../actions";

import NavbarLogin from "../components/NavbarLogin";
import LoginComponent from "../components/LoginComponent";
import Footer from "../components/Footer";

const Login = (props) => {
  return (
    <section className="bg-black hero">
      <NavbarLogin />
      <LoginComponent />
      <Footer />
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

// export default Login;
export default connect(null, mapDispatchToProps)(Login);
