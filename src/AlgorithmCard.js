import React from 'react';

// Import stylesheets
import "./assets/card.css";

export default class AlgorithmCard extends React.Component {
  render() {
    return (
      <span className="algorithm-card" onClick={this.props.onClick}>
        <img src={this.props.image} alt={this.props.label} />
        <p>{this.props.label}</p>
      </span>
    )
  }
}