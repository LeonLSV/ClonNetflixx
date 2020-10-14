import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

// import { withRouter } from 'react-router-dom';

// Importar modulo para conectar el componente con el store
import { connect } from "react-redux";
// Importar las acciones a ejecutar en el store a través de este componente
import { registerRequest } from "../actions";

import createUser from "../utils/Register";

import "./styles/LoginComponent.css";

const RegisterComponent = (props) => {
  let history = useHistory();
  // const { match, location, history } = props;
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // props.registerRequest(form);
    // props.history.push("/");
    console.log(form);
    form.phone = "12345678900";
    form.birthday = "1989-09-15";
    form.country = "";
    form.address = "SALAMANDRA CASA 3";
    form.isAdmin = false;
    form.createdAt = "2020-10-04T02:42:30.239Z";
    form.updatedAt = "2020-10-04T02:42:30.239Z";
    console.log(form);
    const state = await createUser(form);
    console.log(state.code);
    if (state.code === 201) {
      console.log(props);
      console.log(history);
      history.push("/Home/Login");
      // this.props.history.push("/Home");
      // event.preventDefault();
      // // 6. Disparamos la acción registrar el usuario en el store
      // props.registerRequest(form);
      // // Redireccionar a otra ruta.
      // props.history.push("/Home");
      // props.history.push("/Home");
    } else {
      console.log("Error al crear cuenta");
    }
    // postData({
    //   apiKeyToken:
    //     "98fbbd37e1daf634fd7b322d8d5de856f1301da90d4c29ed28dd96299a8b449f",
    // });
  };

  // {
  //   apiKeyToken:
  //     "98fbbd37e1daf634fd7b322d8d5de856f1301da90d4c29ed28dd96299a8b449f",
  // }

  // {
  //   id: 10,
  //   email: "string",
  //   phone: "string",
  //   password: "string",
  //   Name: "string",
  //   lastName: "string",
  //   birthday: "string",
  //   country: "string",
  //   address: "string",
  // }

  return (
    <div className="justify-center contenedor px-12">
      <form
        className="flex flex-col items-center contenedor-caja mb-64"
        onSubmit={handleSubmit}
      >
        <h1 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-white text-4xl m-10 text-center">
          Crear Cuenta
        </h1>
        <input
          name="email"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white focus:outline-none focus:shadow-outline"
          type="Email"
          placeholder="email"
          onChange={handleInput}
        ></input>
        <input
          name="password"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white  focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Contraseña"
          onChange={handleInput}
        ></input>
        <input
          name="name"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="name"
          onChange={handleInput}
        ></input>
        <input
          name="lastname"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="lastname"
          onChange={handleInput}
        ></input>

        <button
          to="/Cuenta"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 button-login items-center mt-10"
        >
          Registrarse
        </button>
        <Link to="/login">Inicia sesión</Link>
        <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 justify-between">
          <h6 className=" text-white text-sm text-left mt-2 mb-8">
            Recuerdame
          </h6>
          <h6 className=" text-white text-sm text-right mt-2 mb-8">
            ¿Necesitas ayuda?
          </h6>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mt-2 mb-10">
          <h3 className=" text-white text-base mt-2 mb-2 ">
            ¿Primera vez en Netflix? Suscríbete ya.
          </h3>
          <h3 className="text-white text-sm mt-2 mb-2">
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot. Más info.
          </h3>
        </div>
      </form>
    </div>
  );
};

// export default RegisterComponent;
// 4. Establecer que acciones llevará a cabo este componente en el store
const mapDispatchToProps = {
  registerRequest,
};

// 3. Conectar el componente con el store
export default connect(null, mapDispatchToProps)(RegisterComponent);
