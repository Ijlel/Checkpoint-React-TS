import React, { Component } from 'react';

interface CounterState {
    count:number
}

interface CounterProps {
    // i dont have props 
}

class CounterClass extends Component <CounterProps, CounterState > {
  state:CounterState = {
    count: 0,
  };

  increment = ():void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
