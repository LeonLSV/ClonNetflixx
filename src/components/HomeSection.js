import React from "react";
import video from "../images/tv.png";

import "./styles/HomeSection.css";

class HomeSection extends React.Component {
  render() {
    return (
      <section className="Homesection-container flex justify-center items-center py-16 px-12 bg-black">
        <div className=" flex flex-row justify-center items-center">
          <div className="texto-container">
            <h1>Disfruta en tu TV.</h1>
            <h3>
              Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
              reproductores de Blu-ray y más.
            </h3>
          </div>
          <div>
            <img className="Section-image" src={video} alt=""></img>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSection;
