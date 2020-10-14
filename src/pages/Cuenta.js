import React from "react";
import "./styles/Cuenta.css";

import NavbarLogin from "../components/NavbarLogin";
import CuentaSel from "../components/CuentaSel";
import Footer from "../components/Footer";

class Cuenta extends React.Component {
  render() {
    return (
      <section className="bg-black">
        <NavbarLogin />
        <CuentaSel />
        <Footer />
      </section>
    );
  }
}

export default Cuenta;
