import React, { Component } from 'react';
import './display.css';


class Display extends Component {

  
  render() {
    return (

      
     <div  id='display' className='display' >
     <span>{this.props.input}</span>
     <span>{this.props.result}</span>
     </div>
    );
  }

}
export default Display;
