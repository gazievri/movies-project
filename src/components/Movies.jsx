import React from 'react';
import Movie from './Movie';

const Movies = ({movies}) => {
  return(
    <div className="movies">
      {movies.map((item) => { return (<Movie movie={item} key={item.imdbID} /> )})}
    </div>
  )

}

export default Movies;
