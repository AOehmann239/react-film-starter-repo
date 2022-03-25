import React, { Component } from 'react';
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="film-library">
          <FilmList film={TMDB.films} />
          <Details film={TMDB.films} />
        </div>
      </div>
    );
  }
}

export default App;
