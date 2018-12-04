import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props)
  }

  incrementCounter = () => {
    this.props.onUpdateSum(+1);
    this.props.onUpdate(this.props.id, this.props.count + 1);
  };

  decrementCounter = () => {
    this.props.onUpdateSum(-1);
    this.props.onUpdate(this.props.id, this.props.count - 1);
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>
          +
        </button>
        <span>
          &nbsp;{this.props.count}&nbsp;
        </span>
        <button onClick={this.decrementCounter}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
