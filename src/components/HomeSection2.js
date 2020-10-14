import React from "react";
import image from "../images/mobile-0819.jpg";

import "./styles/HomeSection2.css";

class HomeSection2 extends React.Component {
  render() {
    return (
      <section className="Homesection2-container flex justify-center items-center py-16 px-12 bg-black">
        <div className=" flex flex-row justify-center items-center">
          <div>
            <img className="Section2-image" src={image} alt=""></img>
          </div>
          <div className="texto2-container">
            <h1>Descarga tus series para verlas offline.</h1>
            <h3>Guarda tu contenido favorito y ten siempre algo para ver.</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection2;
