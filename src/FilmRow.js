import React, { Component } from 'react';

export default class FilmRow extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
