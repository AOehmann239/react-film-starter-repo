import React, { Component } from 'react';
import TMDB from './TMDB';

export default class Details extends Component {
  // our input is going to receive the change handler function from FruitContainer, this will change state in the parent component
  render() {
    return (
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <Details TMDB={TMDB} />
      </div>
    );
  }
}
