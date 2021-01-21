import React from 'react';

// Import stylesheets
import './assets/arrow.css';

const ArrowHead = (props) => {
  return (
    <span 
      className="arrow-head" 
      style={{
        top: `${props.top}px`, 
        left: `${props.left}px`, 
        transform: `rotate(${props.rotation}deg)`
      }}>
      <span className="arrow-head-left" />
      <span className="arrow-head-right" />
    </span>
  )
}

// Export
export default class Arrow extends React.Component {
  
  horizontalArrow() {
    return (
      <span className={`horizontal-line hl-pos-${this.props.position}`}>
        {this.props.direction === "left" ? 
          <ArrowHead top="3" left="-3" rotation="-90" /> :
          <ArrowHead top="0" left="52" rotation="90" />}
      </span>
    )
  }

  doubleHorizontalArrow() {
    return (
      <span className={`horizontal-line hl-pos-${this.props.position}`}>
        {this.props.direction === "left" ? 
          <ArrowHead top="3" left="-3" rotation="-90" /> :
          <ArrowHead top="0" left="52" rotation="90" />}
          {this.props.direction === "left" ? 
          <ArrowHead top="3" left="5" rotation="-90" /> :
          <ArrowHead top="0" left="44" rotation="90" />}
      </span>
    )
  }

  verticalArrow() {
    return (
      <span className={`vertical-line vl-pos-${this.props.position}`}>
        {this.props.direction === "up" ? 
          <ArrowHead top="-3" left="0" rotation="0" /> :
          <ArrowHead top="52" left="3" rotation="180" />}
      </span>
    )
  }

  doubleVerticalArrow() {
    return (
      <span className={`vertical-line vl-pos-${this.props.position}`}>
        {this.props.direction === "up" ? 
          <ArrowHead top="-3" left="0" rotation="0" /> :
          <ArrowHead top="52" left="3" rotation="180" />}
          {this.props.direction === "up" ? 
          <ArrowHead top="5" left="0" rotation="0" /> :
          <ArrowHead top="44" left="3" rotation="180" />}
      </span>
    )
  }

  rotationArrow() {
    return (
      <span className="rotation-circle" style={{boxShadow: this.props.rotateBoth ? "0px -5px 1px #264653aa" : "none"}}>
        <span className="rotation-mask" style={{backgroundColor: this.props.bg}}/>
        {this.props.direction === "counter-clockwise" ?
          <ArrowHead top="36" left="7" rotation="145" /> :
          <ArrowHead top="36" left="35" rotation="-145" />}
      </span>
    )
  }

  doubleRotationArrow() {
    return (
      <span className="rotation-circle">
        <span className="rotation-mask" />
        {this.props.direction === "counter-clockwise" ?
          <ArrowHead top="36" left="7" rotation="145" /> :
          <ArrowHead top="36" left="35" rotation="-145" />}
        {this.props.direction === "counter-clockwise" ?
          <ArrowHead top="29" left="1" rotation="170" /> :
          <ArrowHead top="29" left="41" rotation="-170" />}
      </span>
    )
  }

  render() {
    if (this.props.type === "horizontal") {
      if (this.props.double === "true") {
        return this.doubleHorizontalArrow();
      }
      return this.horizontalArrow();
    }  

    if (this.props.type === "vertical") {
      if (this.props.double === "true") {
        return this.doubleVerticalArrow();
      }
      return this.verticalArrow();
    }

    if (this.props.type === "rotation") {
      if (this.props.double === "true") {
        return this.doubleRotationArrow()
      }
      return this.rotationArrow();
    }

    return <span>Nie ma takiego ruchu...</span> 
  }
}