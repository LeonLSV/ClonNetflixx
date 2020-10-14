import React from "react";
import video from "../images/device-pile.png";

import "./styles/HomeSection3.css";

class HomeSection3 extends React.Component {
  render() {
    return (
      <section className="Homesection3-container flex justify-center items-center py-16 px-12 bg-black">
        <div className=" flex flex-row justify-center items-center">
          <div className="texto3-container">
            <h1>Disfruta donde quieras.</h1>
            <h3>
              Películas y series ilimitadas en tu teléfono, tablet, computadora
              y TV sin costo extra.
            </h3>
          </div>
          <div>
            <img className="Section3-image" src={video} alt=""></img>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection3;
