import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/mas.png";
import "./styles/Navbar.css";

class CuentaSel extends React.Component {
  render() {
    return (
      <section className="flex justify-center p-48">
        <div className="">
          <h1 className="text-white text-5xl">¿Quién está viendo ahora?</h1>
          <div className="flex justify-end">
            <Link to="/Main" className="text-white justify-center">
              <img className="p-4" src={logo} alt="Logo"></img>
              Agregar Perfíl
            </Link>
          </div>
          <div className="flex justify-center p-6">
            <button className="text-white px-6 py-1 border-solid border-2 border-white ">
              Administrar Perfiles
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default CuentaSel;
