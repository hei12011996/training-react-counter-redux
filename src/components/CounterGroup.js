import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
  state = {
            sum: 0,
            counters: new Array(this.props.gpSize).fill(0).map(() => ({id: new Date().getTime() + Math.random(), count: 0})), 
            version: 0
          };

  updateSum = (delta) => {
    this.state.sum += delta;
    this.setState(this.state);
  };

  updateCount = (id, count) => {
    let counters = this.state.counters.map(counter => {
      if (id === counter.id) {
        return {id: new Date().getTime() + Math.random(), count: count};
      } else {
        return counter;
      }
    });
    this.state.counters = counters;
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => 
          <Counter id = {counter.id} count = {counter.count} onUpdate = {this.updateCount} onUpdateSum = {this.updateSum} />
        )}
        <span>Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default CounterGroup;
