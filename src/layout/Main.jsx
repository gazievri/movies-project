import React from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import * as Api from "../util/Api.js";
import Preloader from "../components/Preloader";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    Api.getData()
      .then((data) => {
        this.setState({ movies: data.Search });
      })
      .catch((err) => console.log(err));
  }

  searchMovies = (keyWords) => {
    Api.getSearch(keyWords)
      .then((data) => {
        this.setState({ movies: data.Search })
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
