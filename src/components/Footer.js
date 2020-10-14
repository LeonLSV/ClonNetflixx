import React from "react";

import "./styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="h-40 flex flex-col  justify-center Footer bg-black text-white">
        <p className="flex flex-col items-start p-4">
          ¿Preguntas? Llama al 01 800 917 1564
        </p>
        <section className="flex justify-around">
          <p className="p-4">Preguntas frecuentes</p>
          <p className="p-4">Preferencias de cookies</p>

          <p className="p-4">Centro de ayuda</p>
          <p className="p-4">Información corporativa</p>

          <p className="p-4">Términos de uso</p>

          <p className="p-4">Privacidad</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
