import React from "react";
// import logo from "../images/logo.png";
import "./styles/CardFAQ.css";

class CardFAQ extends React.Component {
  state = {
    className: "cardText closed",
    content: {
      //Inicializamos vacios para evitar el warning de que el input paso de ser no controlado a controlado
      question: "",
      answer: "",
    },
  };

  expandir = () => {
    if (this.state.className === "cardText closed") {
      // debugger;
      return this.setState({ className: "cardText open" });
    }
    return this.setState({ className: "cardText closed" });
  };
  render() {
    return (
      <div className="card">
        <div className="cardTitle">
          <button onClick={this.expandir}>
            {this.props.question}
            <span>+</span>
          </button>
        </div>
        <div className={this.state.className}>
          <span className="cardText--text">{this.props.answer}</span>
        </div>
      </div>
    );
  }
}

export default CardFAQ;
