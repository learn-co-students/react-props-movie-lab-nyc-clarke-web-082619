import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    // use the ... operator to copy entire object
    return movieData.map((movie, id) => <MovieCard key={id} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
