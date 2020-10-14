import React from "react";
import CarouselItem from "../components/CarouselItem";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=577cca3";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(`${API}&s=series`);
    const resJSON = await res.json();
    this.setState({ data: resJSON.Search });
  }
  render() {
    return (
      <div>
        {this.state.data.map((movie, i) => {
          return <CarouselItem movie={movie} key={i} />;
        })}
      </div>
    );
  }
}

export default List;
