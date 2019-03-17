import React, { Component } from 'react';
import './button.css';



class Button extends Component {

  isOperator = val => {
    return !isNaN(val) || val ==='.' || val === '←' || val ==='AC' ;
  }
passToParent = () => {this.props.handleClick(this.props.name)}


  
  render() {
    return (
    <button className= {`pad-btn ${this.isOperator (this.props.name) ? 'button-c': 'operator'} `}
     onClick={this.passToParent} 
    name={this.props.name } id={this.props.id}>
    {this.props.name}
     </button>
    );
  }

}
export default Button;
