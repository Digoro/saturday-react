import React, { Component } from 'react';
import './App.css';
import LifecycleSample from './LifecycleSample';
import IterationSample from './IterationSample';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <IterationSample></IterationSample>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifecycleSample color={this.state.color}></LifecycleSample>
      </div>
    )
  }
}

export default App;

