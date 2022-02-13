import React, {Component} from "react"
import {Movies} from '../components/Movies'

class Main extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?s=marvel&apikey=4f5d107d')
      .then(res => res.json())
      .then(res => this.setState({movies: res.Search}))
  }

  render() {
    const {movies} = this.state
    return <main className="content container">
      {
        movies.length ? <Movies movies={movies}/> : <h3>loading</h3>
      }
    </main>
  }
}

export {Main}