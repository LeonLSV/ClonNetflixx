import React from "react";
import CarouselItem from "../components/CarouselItem";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=577cca3";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      error: "",
    };
  }

  async componentDidMount() {
    const res = await fetch(`${API}&s=romantic`);
    const resJSON = await res.json();
    this.setState({ data: resJSON.Search });
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
      <div>
        {this.state.data.map((movie, i) => {
          return (
              <CarouselItem movie={movie} key={i} />
          )
        })}
      </div>
    );
  }
}

export default List;
