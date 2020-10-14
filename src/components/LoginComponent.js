import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Importar modulo para conectar el componente con el store
import { connect } from "react-redux";
// Importar las acciones a ejecutar en el store a través de este componente
import { loginRequest } from "../actions";

import loginUser from "../utils/loginUser";

import "./styles/LoginComponent.css";
// import { useState } from "react";

const LoginComponent = (props) => {
  let history = useHistory();
  // state = {};
  // console.log(props);
  // console.log(props.history);
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.loginRequest(form);
    //history esta dispobible gracias browser router
    // props.history.push("/Home");
    console.log(form);
    const state = await loginUser(form);
    console.log(state.data.token);
    if (state.code === 200) {
      console.log("Inicio de sesión exitoso");
      console.log(history);
      history.push("/Main");
    } else {
      console.log("Error al Iniciar sesión");
    }
  };

  return (
    <div className="justify-center contenedor px-12">
      <form
        className="flex flex-col items-center contenedor-caja mb-64"
        onSubmit={handleSubmit}
      >
        <h1 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-white text-4xl m-10 text-center">
          Iniciar Sesión
        </h1>

        <input
          name="email"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white focus:outline-none focus:shadow-outline"
          type="Email"
          placeholder="Email"
          onChange={handleInput}
        ></input>
        <input
          name="password"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white  focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Contraseña"
          onChange={handleInput}
        ></input>
        <button
          to="/Cuenta"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 button-login items-center mt-10"
        >
          Iniciar Sesión
        </button>

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

const mapDispatchToProps = {
  loginRequest,
};
// export default LoginComponent;

export default connect(null, mapDispatchToProps)(LoginComponent);
