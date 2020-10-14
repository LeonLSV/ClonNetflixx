import React from "react";
import "./styles/HomeLanding.css";

import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link } from "react-router-dom";

import NavbarLogin from "../components/NavbarLogin";
import RegisterComponent from "../components/RegisterComponent";
import Footer from "../components/Footer";

const Register = (props) => {
  return (
    <section className="bg-black hero">
      <NavbarLogin />
      <RegisterComponent />
      <Footer />
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

// export default Register;
export default connect(null, mapDispatchToProps)(Register);
