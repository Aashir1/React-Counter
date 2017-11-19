import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      tempCounter: 0,
      coundownCounter: 30,
      flag : false
    }
  }
  //function start coundown counter from 30 to 0 during this duration buttons was disabled
  disableCounter = () => {
    this.setState({
      flag : true
    });
    let stopExe = setInterval(() => {
      if (this.state.coundownCounter === 0) {
        clearInterval(stopExe);
        this.setState({tempCounter: 0});
        this.setState({coundownCounter : 30});
        this.setState({
          flag : false
        });
      }
      else {
        this.setState({
          coundownCounter: this.state.coundownCounter - 1
        })
      }
    }, 1000);
  }
  //simple increment function 
  increment = () => {
    if (this.state.counter < 10) {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    else {
      if (this.state.tempCounter < 3) {
        alert('You are going down from 0')
        this.setState({
          tempCounter: this.state.tempCounter + 1
        })
        if (this.state.tempCounter === 2) {
          this.disableCounter();
          this.setState({
            tempCounter: this.state.tempCounter + 1
          })
        }
      }
    }
  }
  //simple decrement function
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
    else {
      if (this.state.tempCounter < 3) {
        alert('You are going down from 0')
        this.setState({
          tempCounter: this.state.tempCounter + 1
        })
        if (this.state.tempCounter === 2) {
          this.disableCounter();//this function not call
          this.setState({
            tempCounter: this.state.tempCounter + 1
          })
        }
      }
    }
  }
  render() {
    return (
      <div>
        {
          this.state.flag?
          <div>
            <h2 className = "cowndown-timer">00:{this.state.coundownCounter>9?this.state.coundownCounter:`0${this.state.coundownCounter}`}</h2>
            <h1>Counter Value: {this.state.counter} (limit of counter from 0 to 10)</h1>
            <Button clickedFunction = {this.decrement} text = "Decrement" disabled={this.state.tempCounter === 3} />
            <Button clickedFunction = {this.increment} text = "Increment" disabled={this.state.tempCounter === 3} />
          </div>
          :
          <div>
            <h1>Counter Value: {this.state.counter} (limit of counter from 0 to 10)</h1>
            <Button clickedFunction = {this.decrement} text = "Decrement" disabled={this.state.tempCounter === 3} />
            <Button clickedFunction = {this.increment} text = "Increment" disabled={this.state.tempCounter === 3} />
          </div>
        }
        {/* <h2 className = "cowndown-timer">00:{this.state.coundownCounter>9?this.state.coundownCounter:`0${this.state.coundownCounter}`}</h2>
        <h1>Counter Value: {this.state.counter} (limit of counter from 0 to 10)</h1>
        <button onClick={this.decrement} disabled={this.state.tempCounter === 3}>Decrement</button>
        <button onClick={this.increment} disabled={this.state.tempCounter === 3}>Increment</button> */}

      </div>
    )
  }
}
export default Counter;

