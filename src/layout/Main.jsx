import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?s=marvel&apikey=4f5d107d`)
      .then((res) => res.json())
      .then((res) => this.setState({ movies: res.Search }));
  }

  searchMovie = (search, filter = '') => {
    if (search === '') return
    fetch(`https://www.omdbapi.com/?s=${search}&type=${filter}&apikey=4f5d107d`)
      .then((res) => res.json())
      .then((res) => this.setState({ movies: res.Search}));
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="content container">
        <Search searchMovie={this.searchMovie} changeFilter={this.changeFilter}/>
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
      </main>
    );
  }
}

export { Main };
