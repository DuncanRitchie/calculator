import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    total: 0,
    lastOperation: "Plus"
  }
  clickButton = (event) => {
    
    // this.setState({ total: event.target.id })
  }

  
  render() {
    return (
      <div className="App">
        <Calculator total={this.state.total} clickButton={this.clickButton}/>
      </div>
    );
  }
}

const Calculator = (props) => {
  return (
    <div className="calculator">
      <Display total={props.total}/>
      <Buttons clickButton={props.clickButton}/>
    </div>
  )
}

const Display = (props) => {
  return (
    <div className="display">
      <div>
        {props.total}
      </div>
    </div>
  )
}

const Buttons = (props) => {
  return (
    <div className="buttons">
      <Button id="AC" innerHTML="AC"/>
      <Button id="PlusMinus" innerHTML="&plusmn;"/>
      <Button id="Percent" innerHTML="%"/>
      <Button id="Divide" innerHTML="&divide;"/>
      <Button id="Button7" innerHTML="7"/>
      <Button id="Button8" innerHTML="8"/>
      <Button id="Button9" innerHTML="9"/>
      <Button id="Times" innerHTML="&times;"/>
      <Button id="Button4" innerHTML="4"/>
      <Button id="Button5" innerHTML="5"/>
      <Button id="Button6" innerHTML="6"/>
      <Button id="Minus" innerHTML="-"/>
      <Button id="Button1" innerHTML="1"/>
      <Button id="Button2" innerHTML="2"/>
      <Button id="Button3" innerHTML="3"/>
      <Button id="Plus" innerHTML="+"/>
      <Button id="Button0" innerHTML="0"/>
      <Button id="Point" innerHTML="."/>
      <Button id="SquareRoot" innerHTML="&radic;"/>
      <Button id="Equals" innerHTML="="/>
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="button" id={props.id} onClick={App.clickButton}>
      <div>
        {props.innerHTML}
      </div>
    </div>
  )
}


export default App;
