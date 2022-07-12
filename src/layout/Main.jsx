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
      loading: true,
    };
  }

  componentDidMount() {
    Api.getData()
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      })
      .catch((err) => console.log(err));
  }

  searchMovies = (keyWords, type) => {
    this.setState({ loading: true })
    Api.getSearch(keyWords, type)
      .then((data) => {
        this.setState({ movies: data.Search, loading: false })
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {!loading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
