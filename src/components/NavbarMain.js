import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import video from "../images/trailer.mp4";
import userIcon from "../images/user-icon.png";
import "./styles/NavbarMain.css";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=577cca3";

export class NavbarMain extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      error: "",
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      return this.setState({ error: "Por favor escribe un texto válido" });
    }

    const res = await fetch(`${API}&s=${this.state.searchTerm}`);
    const data = await res.json();
    this.setState({ data: data.Search });
  }

  render() {
    return (
      <section className= "w-screen">
        <div className="NavbarMain1">
          <div className="NavbarMain-container">
            <Link to="/Main">
              <img className="NavbarMain-image" src={logo} alt="Logo"></img>
            </Link>
            <ol className="Navbar-lista">
              <li>Inicio</li>
              <li>Peliculas</li>
            </ol>
            <div className="form">
              <form
                className="form-container"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <input
                  type="text"
                  className="form-input"
                  placeholder="Serarch"
                  onChange={(e) =>
                    this.setState({ searchTerm: e.target.value })
                  }
                  autoFocus
                />
              </form>
              <p>{this.state.error ? this.state.error : ""}</p>
            </div>
            <header className="header">
            <div className="header__menu">
              <div className="header__menu--profile">
                <img src={userIcon} alt="" />
                <p className="p-2">Perfil</p>
              </div>
              <ul>
                <li>
                  <a href="/Main">Cuenta</a>
                </li>
                <li>
                  <a href="/Home">Cerrar Sesión</a>
                </li>
              </ul>
            </div>
          </header>
          </div>
        </div>
        <div>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      
      </section>
    );
  }
}
export default NavbarMain;
