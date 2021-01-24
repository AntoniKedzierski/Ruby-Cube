import React from 'react';
import AlgorithmViewer from './AlgorithmViewer';

import "./assets/styles.css";
import Header from './Header';

// Create a React component
export default class App extends React.Component {
  state = {
    algorithm: "",
    blurred: false,
  }

  render() {
    return (
      <div className={`background`}>
        <Header blurred={this.state.blurred}/>
        <div className="container">
          <AlgorithmViewer blurred={this.state.blurred} toggleBlur={() => this.setState({blurred: !this.state.blurred})}/>
        </div>
      </div>
    )
  }
}