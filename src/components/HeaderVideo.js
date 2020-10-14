import React from "react";
import "./styles/HeaderVideo.css";
// import "./styles/Main.css";

class HeaderVideo extends React.Component {
  render() {
    return (
      <section>
        <div className="HeaderVideo">
          <div>
            <h1 className="uppercase ml-32 text-6xl font-extrabold leading-none	">
              Brooklyn Nine-Nine
            </h1>
            <h3 className="ml-32">
              Atrapa delincuentes y se ríe de la autoridad, pero al nuevo
              capitan no le causa gracia nada de eso
            </h3>
          </div>
          <div className="HeaderVideo-button">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mr-10 rounded ml-32 ">
              Reproducir
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Más información
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default HeaderVideo;
