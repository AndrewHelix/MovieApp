import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    filter: "",
  };

  handleFilter = (e) => {
    this.setState(() => ({filter: e.target.value}), () => {
      this.props.searchMovie(this.state.search, this.state.filter)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              className="validate"
              placeholder="search"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  this.props.searchMovie(this.state.search, this.state.filter);
                }
              }}
            />
            <button
              className="btn search-btn"
              onClick={() => this.props.searchMovie(this.state.search, this.state.filter)}
            >
              Search
            </button>
          </div>
          <div action="#" className="radio-btns">
            <label>
              <input 
                name="group1" 
                type="radio" 
                value='' 
                onChange={this.handleFilter}
                checked={this.state.filter === ''}
              />
              <span>All</span>
            </label>

            <label>
              <input 
                name="group1" 
                type="radio" 
                value='movie'
                onChange={this.handleFilter}
                checked={this.state.filter === 'movie'}
              />
              <span>Movie</span>
            </label>

            <label>
              <input 
                name="group1" 
                type="radio" 
                value='series'
                onChange={this.handleFilter}
                checked={this.state.filter === 'series'}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
