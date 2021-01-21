import React from 'react';
import Move from './Move';
import PLL from './algoritms/pll.json';
import OLL from './algoritms/oll.json';

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
    db: "",
    imgSource: "",
    openModal: false,
  }

  loadFromDB = e => {
    const [ dbName, algorithmName ] = e.target.value.split("_")
    console.log(dbName, algorithmName)
    var algorithm = "";
    var image_url = "";

    if (dbName === "PLL") {
      algorithm = PLL[algorithmName].script
      image_url = PLL[algorithmName].image
    }

    if (dbName === "OLL") {
      algorithm = OLL[algorithmName].script
      image_url = OLL[algorithmName].image
    }

    this.setState({
      db: e.target.value,
      algorithm: algorithm,
      imgSource: image_url,
    })
  }


  render() {
    return ( 
      <div class="algorithm-viewer">
        <div class="header">
          <h1>Podgląd algorytmu</h1>
          <img src={this.state.imgSource} alt="visualization"/>
        </div>
        <p>
          Wpisz algorytm używając standardowej notacji i oddzielając ruchy spacją. Możesz też wybrać algorytm z listy.
        </p>
        <div class="task-bar">
          <input 
            value={this.state.algorithm} 
            onChange={e => this.setState({algorithm: e.target.value})} 
            placeholder="Podaj algorytm" 
          />
          <select 
            name="algorithm-db" 
            id="algorithm-db" 
            value={this.state.db} onChange={this.loadFromDB}>
            <optgroup label="=== PLL ===">
              <option value="PLL_A">A</option>
              <option value="PLL_A'">A'</option>
              <option value="PLL_E">E</option>
              <option value="PLL_F">F</option>
              <option value="PLL_G">G</option>
              <option value="PLL_G'">G'</option>
              <option value="PLL_G2">G2</option>
              <option value="PLL_G2'">G2'</option>
              <option value="PLL_H">H</option>
              <option value="PLL_J">J</option>
              <option value="PLL_J'">J'</option>
              <option value="PLL_N">N</option>
              <option value="PLL_N'">N'</option>
              <option value="PLL_R">R</option>
              <option value="PLL_R'">R'</option>
              <option value="PLL_T">T</option>
              <option value="PLL_U">U</option>
              <option value="PLL_U'">U'</option>
              <option value="PLL_V">V</option>
              <option value="PLL_Y">Y</option>
              <option value="PLL_Z">Z</option>
            </optgroup>
            <optgroup label="=== OLL: Krzyż ===">
              <option value="OLL_1">Samochód</option>
              <option value="OLL_2">Ludzik</option>
              <option value="OLL_3">Przekątna</option>
              <option value="OLL_4">Żaba</option>
              <option value="OLL_5">Kieszenie</option>
              <option value="OLL_6">Lewoskręt</option>
              <option value="OLL_7">Prawoskręt</option>
            </optgroup>
            <optgroup label="=== OLL: Kropa ===">
              <option value="OLL_8">Po trzy z boku</option>
              <option value="OLL_9">Diagonala</option>
              <option value="OLL_10">Potrójna Miki</option>
              <option value="OLL_11">Przy po lewej</option>
              <option value="OLL_12">Pojedyńcza Miki</option>
              <option value="OLL_13">Lewa dwójka</option>
              <option value="OLL_14">Prawa dwójka</option>
              <option value="OLL_15">Szachownica</option>
            </optgroup>
          </select>
          <span 
            className="button" 
            onClick={() => this.setState(
              {algorithm: this.state.algorithm.split(" ").map(m => MirrorMap(m)).join(" ")})}>
            Mirror
          </span>
          <span
            className="button" 
            onClick={() => this.setState(
              {algorithm: this.state.algorithm.split(" ").slice(0).reverse().map(m => ReverseMap(m)).join(" ")})}>
            Od tyłu
          </span>
        </div>
        <div class="move-container">
          {this.state.algorithm ? this.state.algorithm.split(" ").map(m => <Move label={m}/>) : null}
        </div>
      </div>
    )
  }
}


export default AlgorithmViewer;