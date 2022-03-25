import React, { Component } from 'react';
//import TMDB from './TMDB';
import FilmRow from './FilmRow.js';

export default class FilmList extends Component {
  // our input is going to receive the change handler function from FruitContainer, this will change state in the parent component
  render() {
    const allFilms = this.props.film.map((f, i) => {
      return <FilmRow key={i} title={f.title} />;
    });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    );
  }
}
