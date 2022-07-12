import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleClick = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };

  render() {
    const { search } = this.state;
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search..."
            type="search"
            name="search"
            className="validate"
            value={search}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            autocomplete = "off"
          />
          <button className="btn search-btn" onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div>
          <label className="radio-btn">
            <input
              className="with-gap"
              name="type"
              type="radio"
              value=""
              onChange={this.handleChange}
              defaultChecked
            />
            <span>All</span>
          </label>
          <label className="radio-btn">
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              onChange={this.handleChange}
            />
            <span>Movie Only</span>
          </label>
          <label className="radio-btn">
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              onChange={this.handleChange}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
