import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

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
                  this.props.searchMovie(this.state.search)
                }
              }}
            />
            <button 
              className="btn search-btn"
              onClick={() => this.props.searchMovie(this.state.search)}>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
