import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY
class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?s=marvel&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => this.setState({ movies: res.Search, loading: false }));
  }

  searchMovie = (search, filter = "") => {
    if (search === "") return;
    this.setState({ loading: true });
    fetch(`https://www.omdbapi.com/?s=${search}&type=${filter}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => this.setState({ movies: res.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content container">
        <Search
          searchMovie={this.searchMovie}
          changeFilter={this.changeFilter}
        />
        {loading ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    );
  }
}

export { Main };
