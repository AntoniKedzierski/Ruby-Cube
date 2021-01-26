import React from 'react';
import Move from './Move';
import PLL from './algoritms/pll.json';
import OLL from './algoritms/oll.json';
import F2L from './algoritms/f2l.json';
import AlgorithmCard from './AlgorithmCard';

const MirrorMap = (move) => {
  switch (move) {
    case "R": return "L'";
    case "R'": return "L";
    case "R2": return "L2'";
    case "R2'": return "L2";
    case "L": return "R'";
    case "L'": return "R";
    case "L2": return "R2'";
    case "L2'": return "R2";
    case "r": return "l'";
    case "r'": return "l";
    case "l": return "r'";
    case "l'": return "r";
    case "r2": return "l2'";
    case "r2'": return "l2";
    case "l2": return "r2'";
    case "l2'": return "r2";
    case "M": return "M";
    case "M'": return "M'";
    default:
      if (move.includes("'")) return move.replace("'", "");
      return (move + "'");
  }
}

const ReverseMap = (move) => {
  if (move.includes("'")) return move.replace("'", "");
  return (move + "'");
}


class AlgorithmViewer extends React.Component {
  state = {
    algorithm: "",
    imgSource: "",
    selectionTab: false,
    mirror: false,
    reverse: false
  }

  getPLL = () => {
    return Object.keys(PLL).map(k => {
      return <AlgorithmCard 
        label={PLL[k].label} 
        image={PLL[k].image} 
        onClick={() => {
          this.setState({
            selectionTab: false,
            imgSource: PLL[k].image,
            algorithm: PLL[k].script,
          });
          this.props.toggleBlur();
        }}/> 
      });
  }

  getOLL = (type) => {
    return Object.keys(OLL).map(k => {
      if (OLL[k].type !== type) return null;
      return <AlgorithmCard 
        label={OLL[k].label} 
        image={OLL[k].image} 
        onClick={() => {
          this.setState({
            selectionTab: false,
            imgSource: OLL[k].image,
            algorithm: OLL[k].script,
          });
          this.props.toggleBlur();
        }}/> 
      });
  }

  getF2L = (type) => {
    return Object.keys(F2L).map(k => {
      if (F2L[k].type !== type) return null;
      return <AlgorithmCard 
        label={F2L[k].label} 
        image={F2L[k].image} 
        onClick={() => {
          this.setState({
            selectionTab: false,
            imgSource: F2L[k].image,
            algorithm: F2L[k].script,
          });
          this.props.toggleBlur();
        }}/> 
      });
  }

  render() {
    return ( 
      <div className="algorithm-viewer">
        <div className={`header ${this.props.blurred ? "blurred" : ""}`}>
          <h1>Podgląd algorytmu</h1>
          <img src={this.state.imgSource} alt="visualization"/>
        </div>
        <p>
          Wpisz algorytm używając standardowej notacji i oddzielając ruchy spacją. Możesz też wybrać go z listy, <br />
          która zawiera wszystkie algorytmy metody Fridrich.
        </p>
        <div className="task-bar">
          <input 
            value={this.state.algorithm} 
            onChange={e => this.setState({algorithm: e.target.value})} 
            placeholder="Podaj algorytm" 
          />
          
          <span 
            className="button" 
            onClick={() => {
              this.setState({selectionTab: true});
              this.props.toggleBlur();
            }}>
            Wybierz...
          </span>
          <span 
            className={`button ${this.state.mirror ? "active" : ""}`} 
            onClick={() => this.setState(
              {
                algorithm: this.state.algorithm.split(" ").map(m => MirrorMap(m)).join(" "),
                mirror: !this.state.mirror  
              })}>
            Mirror
          </span>
          <span
            className={`button ${this.state.reverse ? "active" : ""}`} 
            onClick={() => this.setState(
              {
                algorithm: this.state.algorithm.split(" ").slice(0).reverse().map(m => ReverseMap(m)).join(" "),
                reverse: ~this.state.reverse  
              })}>
            Od tyłu
          </span>
        </div>
        <div class={this.state.selectionTab ? "algorithm-selector" : "algorithm-selector hidden"} >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>1. PLL</h2>
            <span 
              className="button" 
              onClick={() => {
                this.setState({selectionTab: false});
                this.props.toggleBlur();
              }}>
              Zamknij
            </span>
          </div>
          <div className="section">{this.getPLL()}</div>
          <h2>2. OLL</h2>
          <h4>2.1 Krzyż</h4>
          <div className="section">{this.getOLL("cross")}</div>
          <h4>2.2 Kropka</h4>
          <div className="section">{this.getOLL("dot")}</div>
          <h2>3. F2L</h2>
          <h4>3.1 Poprawnie zoorientowany róg na swoim miejscu</h4>
          <div className="section">{this.getF2L("corner-placed-correctly")}</div>
          <h4>3.2 Róg na swoim miejscu, kolorem białym w lewo</h4>
          <div className="section">{this.getF2L("corner-white-left")}</div>
          <h4>3.3 Róg na swoim miejscu, kolorem białym w prawo</h4>
          <div className="section">{this.getF2L("corner-white-right")}</div>
          <h4>3.4 Biały róg skierowany ku górze</h4>
          <div className="section">{this.getF2L("corner-white-up")}</div>
          <h4>3.5 Biały róg skierowany w prawo</h4>
          <div className="section">{this.getF2L("corner-top-right")}</div>
          <h4>3.6 Biały róg skierowany w lewo</h4>
          <div className="section">{this.getF2L("corner-top-left")}</div>
        </div>
        <div class="move-container">
          {this.state.algorithm ? this.state.algorithm.split(" ").map(m => <Move label={m}/>) : null}
        </div>
      </div>
    )
  }
}


export default AlgorithmViewer;