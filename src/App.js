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
    console.log('disable counter involked')
    this.setState({
      flag : true
    });
    this.stopExe = setInterval(() => {
      if (this.state.coundownCounter === 0) {
        clearInterval(this.stopExe);
        this.setState({
          tempCounter: 0, 
          coundownCounter : 30, 
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
        alert('You are exceeding from 10');
        this.setState({
          tempCounter: this.state.tempCounter + 1
        });
      }
      if (this.state.tempCounter === 2) {
        this.disableCounter();
      }
    }
  }
  //simple decrement function
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
    else {
      if (this.state.tempCounter < 3) {
        alert('You are going down from 0');
        this.setState({
          tempCounter: this.state.tempCounter + 1
        });
      }
      if (this.state.tempCounter === 2) {
        this.disableCounter();
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
            <Button clickedFunction = {this.decrement} text = "Decrement" hide={this.state.tempCounter === 3} />
            <Button clickedFunction = {this.increment} text = "Increment" hide={this.state.tempCounter === 3} />
          </div>
          :
          <div>
            <h1>Counter Value: {this.state.counter} (limit of counter from 0 to 10)</h1>
            <Button clickedFunction = {this.decrement} text = "Decrement" hide={this.state.tempCounter === 3} />
            <Button clickedFunction = {this.increment} text = "Increment" hide={this.state.tempCounter === 3} />
          </div>
        }
      </div>
    )
  }
}
export default Counter;

