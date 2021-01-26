import React from 'react';

import "./assets/header.css";
import {ReactComponent as Ruby} from './assets/ruby.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div>
          <Ruby className="ruby"/>
        </div>
        <h1>RUBY CUBE</h1>
        <div className="navbar">
          <span className="navitem">ALGORYTMY</span>
          <span className="navitem">RUCHY</span>
          <span className="navitem">INFORMACJE</span>
        </div>
      </div> 
    )
  }
}