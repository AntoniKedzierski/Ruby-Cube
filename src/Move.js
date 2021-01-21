import React from 'react';
import Arrow from "./Arrow";

// Import stylesheets
import "./assets/move.css";

const moveDecoder = (move) => {
  switch (move) {
    case 'R':
      return <Arrow type="vertical" position="right" direction="up" />
    case "R'":
      return <Arrow type="vertical" position="right" direction="down" />
    case 'R2':
      return <Arrow type="vertical" position="right" direction="up" double="true"/>
    case "R2'":
      return <Arrow type="vertical" position="right" direction="down" double="true"/>

    case 'L':
      return <Arrow type="vertical" position="left" direction="down" />
    case "L'":
      return <Arrow type="vertical" position="left" direction="up" />
    case 'L2':
      return <Arrow type="vertical" position="left" direction="down" double="true"/>
    case "L2'":
      return <Arrow type="vertical" position="left" direction="up" double="true"/>

    case 'U':
      return <Arrow type="horizontal" position="top" direction="left" />
    case "U'":
      return <Arrow type="horizontal" position="top" direction="right" />
    case 'U2':
      return <Arrow type="horizontal" position="top" direction="left" double="true"/>
    case "U2'":
      return <Arrow type="horizontal" position="top" direction="right" double="true"/>

    case 'D':
      return <Arrow type="horizontal" position="bot" direction="right" />
    case "D'":
      return <Arrow type="horizontal" position="bot" direction="left" />
    case 'D2':
      return <Arrow type="horizontal" position="bot" direction="right" double="true"/>
    case "D2'":
      return <Arrow type="horizontal" position="bot" direction="left" double="true"/>

    case 'F':
      return <Arrow type="rotation" direction="clockwise" />
    case "F'":
      return <Arrow type="rotation" direction="counter-clockwise" />
    case "F2":
      return <Arrow type="rotation" direction="clockwise" double="true"/>
    case "F2'":
      return <Arrow type="rotation" direction="counter-clockwise" double="true" />       

    case 'B':
      return <Arrow type="rotation" direction="counter-clockwise" />
    case "B'":
      return <Arrow type="rotation" direction="clockwise" />
    case 'B2':
      return <Arrow type="rotation" direction="counter-clockwise" double="true" />
    case "B2'":
      return <Arrow type="rotation" direction="clockwise" double="true" />

    case 'M':
      return <Arrow type="vertical" position="mid" direction="down" />
    case "M'":
      return <Arrow type="vertical" position="mid" direction="up" />
    case 'M2':
      return <Arrow type="vertical" position="mid" direction="down" double="true"/>
    case "M2'":
      return <Arrow type="vertical" position="mid" direction="up" double="true"/>

    case 'E':
      return <Arrow type="horizontal" position="mid" direction="right" />
    case "E'":
      return <Arrow type="horizontal" position="mid" direction="left" />
    case 'E2':
      return <Arrow type="horizontal" position="mid" direction="right" double="true"/>
    case "E2'":
      return <Arrow type="horizontal" position="mid" direction="left" double="true"/>

    case 'r':
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="up" />
          <Arrow type="vertical" position="right" direction="up" />
        </span>
      )
    case "r'":
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="down" />
          <Arrow type="vertical" position="right" direction="down" />
        </span>
      )
    case 'r2':
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="up" double="true"/>
          <Arrow type="vertical" position="right" direction="up" double="true"/>
        </span>
      )
    case "r2'":
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="down" double="true"/>
          <Arrow type="vertical" position="right" direction="down" double="true"/>
        </span>
      )

    case 'l':
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="down" />
          <Arrow type="vertical" position="left" direction="down" />
        </span>
      )
    case "l'":
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="up" />
          <Arrow type="vertical" position="left" direction="up" />
        </span>
      )
    case 'l2':
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="down" double="true"/>
          <Arrow type="vertical" position="left" direction="down" double="true"/>
        </span>
      )
    case "l2'":
      return (
        <span>
          <Arrow type="vertical" position="mid" direction="up" double="true"/>
          <Arrow type="vertical" position="left" direction="up" double="true"/>
        </span>
      )

    case 'u':
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="left" />
          <Arrow type="horizontal" position="top" direction="left" />
        </span>
      )
    case "u'":
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="right" />
          <Arrow type="horizontal" position="top" direction="right" />
        </span>
      )
    case 'u2':
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="left" double="true"/>
          <Arrow type="horizontal" position="top" direction="left" double="true"/>
        </span>
      )
    case "u2'":
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="right" double="true"/>
          <Arrow type="horizontal" position="top" direction="right" double="true"/>
        </span>
      )

    case 'd':
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="right" />
          <Arrow type="horizontal" position="bot" direction="right" />
        </span>
      )
    case "d'":
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="left" />
          <Arrow type="horizontal" position="bot" direction="left" />
        </span>
      )
    case 'd2':
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="right" double="true"/>
          <Arrow type="horizontal" position="bot" direction="right" double="true"/>
        </span>
      )
    case "d2'":
      return (
        <span>
          <Arrow type="horizontal" position="mid" direction="left" double="true"/>
          <Arrow type="horizontal" position="bot" direction="left" double="true"/>
        </span>
      )

    case "x":
      return <Arrow type="vertical" position="mid" direction="up" />
    case "x'":
      return <Arrow type="vertical" position="mid" direction="down" />

    case "y":
      return <Arrow type="horizontal" position="mid" direction="left" />
    case "y'":
      return <Arrow type="horizontal" position="mid" direction="right" />

    case "z":
      return <Arrow type="rotation" position="mid" direction="clockwise" bg="#e9c46a"/>
    case "z'":
      return <Arrow type="rotation" position="mid" direction="counter-clockwise" bg="#e9c46a"/>

    default:
      return <span>Unknown move...</span>
  }
}

export default class Move extends React.Component {
  isBackside() {
    if (this.props.label === "B" || this.props.label === "B'" || 
        this.props.label === "B2" || this.props.label === "B2'" ||
        this.props.label === "b" || this.props.label === "b'")
      return "backside";
    return "";
  }

  isWholeCubeMove() {
    if (this.props.label === "x" || this.props.label === "x'" ||
        this.props.label === "y" || this.props.label === "y'" ||
        this.props.label === "z" || this.props.label === "z'")
      return "whole-cube";
    return "";
  }

  render() {
    return (
      <span className={`move-frame ${this.isBackside()} ${this.isWholeCubeMove()}`}>
        {moveDecoder(this.props.label)}
      </span>
    )
  }
}