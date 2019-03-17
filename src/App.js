import React, { Component } from 'react';
import './App.css';
import Display from './components/display/display';
import Button from './components/buttons/button';


 const keypad =[
  {"key":"AC", "id":"clear"},
  {"key":"←", "id": "backspace" }, 
  {"key":"/", "id":"divide"},
  {"key":"7", "id": "seven"},
  {"key":"8", "id": "eight"},
  {"key":"9", "id": "nine"},
  {"key":"*", "id": "multiply"},
  {"key":"4", "id": "four"},
  {"key":"5", "id": "five"},
  {"key":"6", "id": "six"},
  {"key":"-", "id": "subtract"},
  {"key":"1", "id": "one"},
  {"key":"2", "id": "two"},
  {"key":"3", "id": "three"},
  {"key":"+", "id": "add"},
 // {"key":"%", "id": "percent"},
  {"key":"0", "id": "zero"},
  {"key":".", "id": "decimal"},
  {"key":"=", "id": "equals"}
  ];
  


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      input: '0',
       operator: false,
       decimal: false,
     
       
     
     
    };
  }
    


handleClick = (button)  => {

let input = this.state.input;
let operator = this.state.operator; 


switch (true) {
case /\d/.test(button):
  if(this.state.input !=='0') {
    if (this.state.input.length < 16)
  input += button;
  operator = false
  } else {
 input = button
  }
  break;
 case /[+*\-/]/.test(button):
 if(!this.state.operator){
    input += button;
    operator = true;
    this.setState({decimal:false})
 } else {
   const switchOperator = input.slice(0, input.length -1)
   input = switchOperator
   input += button
 }

break;
case button === 'AC':
    input = '0';
    operator = false;

this.setState({decimal:false})
break;
case button === '=':
if(!this.state.operator){
  // eslint-disable-next-line no-eval
  input = eval(input)
  this.setState({decimal:true})
}
break;
case button === '.':
if(!this.state.decimal) {
  input += '.'
  this.setState({decimal:true})
}
break;
case button === '←':

if (this.state.input.length > 1) {
let str = input.substr(0,input.length-1);  
input = str
} else {
 input = '0' ;
 operator = false;
}

break;

// no default
  } 
 
 this.setState({ input, operator})
 

} 



  render() {
    return (
     <div className='calculator'>
     <h3>Calculator</h3>
    <div className='main'>
     <Display input={this.state.input} result={this.state.result} />
     <div className='button-container'>
    {keypad.map((item, index) => 
      {return <Button  handleClick={this.handleClick} name={item.key} key={index}  id={item.id} />
      }
      
      )}
     </div>
     </div>
     <p>Designed by Sibongile Thanjekwayo</p>
     </div>
    );
  }

}
export default App;
