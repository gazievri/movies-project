import React from 'react';

class Search extends React.Component {

  state = {
    search: '',
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  }

  render() {
    return(
      <div className="row">
        <div className="input-field">
          <input
            placeholder='Search...'
            type='search'
            className="validate"
            value={this.state.search}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <button className='btn search-btn'>Search</button>
        </div>
      </div>
    )
  }
}

export default Search;
