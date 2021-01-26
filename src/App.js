import React from 'react';
import ReactGA from 'react-ga';

import AlgorithmViewer from './AlgorithmViewer';
import "./assets/styles.css";
import Header from './Header';

// Create a React component
export default class App extends React.Component {
  state = {
    algorithm: "",
    blurred: false,
    mobile: false,
  }

  updateDimmensions = () => {
    this.setState({mobile: window.innerWidth <= 1000})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimmensions);
    window.gtag('event', 'login', {method: 'Google'});
    console.log("Google Analytics Mounted...")
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimmensions);
  }

  render() {
    return (
      <div className={`background`}>
        <Header mobile={this.state.mobile}/>
        <div className="container">
          <AlgorithmViewer mobile={this.state.mobile}/>
        </div>
      </div>
    )
  }
}