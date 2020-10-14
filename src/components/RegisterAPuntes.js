// Indico que este componente va a tener estado propio
import React, { useState } from "react";
import { Link } from "react-router-dom";
// 1. Importar modulo para conectar el componente con el store
import { connect } from "react-redux";
// 2. Importar las acciones a ejecutar en el store a través de este componente
import { registerRequest } from "../actions";

import "../assets/styles/components/Register.scss";

// 5. El componente ejecuta acciones contra el store, por tanto activo sus props
const Register = (props) => {
  // Declaro el estado inicial del componente (la propiedad form representa toda el formulario, por ello le paso un objeto con el valor de incio de cada uno de sus campos)
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Funcion controladora de evento que se dispara cuando uno de los campos de formulario cambia su valor. (onChange)
  const handleInput = (event) => {
    // Establezco el nuevo estado del componente segun los valores actuales de cada input, pero conservando los anteriores (destructuración)
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Función controladora de evento que se ejecuta tras dispararse el envio del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // 6. Disparamos la acción registrar el usuario en el store
    props.registerRequest(form);
    // Redireccionar a otra ruta.
    this.props.history.push("/Home");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2 className="register__title">Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            type="text"
            className="input"
            placeholder="Correo Electrónico"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button type="submit" className="button">
            Registrarme
          </button>
        </form>
        <p className="register__container--login">
          Ya tienes una cuenta.
          <Link to="/login">Inicia sesión</Link>
        </p>
      </section>
    </section>
  );
};

// 4. Establecer que acciones llevará a cabo este componente en el store
const mapDispatchToProps = {
  registerRequest,
};

// 3. Conectar el componente con el store
export default connect(null, mapDispatchToProps)(Register);
