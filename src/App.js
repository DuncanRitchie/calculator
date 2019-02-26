import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    total: 0,
    lastOperation: "Plus"
  }
  clickButton = (event) => {
    this.setState({total:event.target.id})
    console.log(event.target.id)
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
      <Button id="AC" innerHTML="AC" clickButton={props.clickButton}/>
      <Button id="PlusMinus" innerHTML="&plusmn;" clickButton={props.clickButton}/>
      <Button id="Percent" innerHTML="%" clickButton={props.clickButton}/>
      <Button id="Divide" innerHTML="&divide;" clickButton={props.clickButton}/>
      <Button id="Button7" innerHTML="7" clickButton={props.clickButton}/>
      <Button id="Button8" innerHTML="8" clickButton={props.clickButton}/>
      <Button id="Button9" innerHTML="9" clickButton={props.clickButton}/>
      <Button id="Times" innerHTML="&times;" clickButton={props.clickButton}/>
      <Button id="Button4" innerHTML="4" clickButton={props.clickButton}/>
      <Button id="Button5" innerHTML="5" clickButton={props.clickButton}/>
      <Button id="Button6" innerHTML="6" clickButton={props.clickButton}/>
      <Button id="Minus" innerHTML="-" clickButton={props.clickButton}/>
      <Button id="Button1" innerHTML="1" clickButton={props.clickButton}/>
      <Button id="Button2" innerHTML="2" clickButton={props.clickButton}/>
      <Button id="Button3" innerHTML="3" clickButton={props.clickButton}/>
      <Button id="Plus" innerHTML="+" clickButton={props.clickButton}/>
      <Button id="Button0" innerHTML="0" clickButton={props.clickButton}/>
      <Button id="Point" innerHTML="." clickButton={props.clickButton}/>
      <Button id="SquareRoot" innerHTML="&radic;" clickButton={props.clickButton}/>
      <Button id="Equals" innerHTML="=" clickButton={props.clickButton}/>
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="button" id={props.id} onClick={props.clickButton}>
      <div>
        {props.innerHTML}
      </div>
    </div>
  )
}


export default App;
