import React from 'react';
import AlgorithmViewer from './AlgorithmViewer';

import "./assets/styles.css";

// Create a React component
export default class App extends React.Component {
  state = {
    algorithm: "",
  }



  render() {
    return (
      <div className="container">
        <AlgorithmViewer />
      </div>
    )
  }
}