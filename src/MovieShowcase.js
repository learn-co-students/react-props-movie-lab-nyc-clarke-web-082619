import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return ( movieData.map((item,id) => <MovieCard title={item.title} poster= {item.poster} genres= {item.genres} IMDBRating={item.IMDBRating} id={id}/>))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
