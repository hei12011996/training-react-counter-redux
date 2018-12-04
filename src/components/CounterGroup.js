import React, { Component } from 'react';
import Counter from './Counter';
import { connect } from "react-redux";

class CounterGroup extends Component {
  state = {
            counters: new Array(this.props.gpSize).fill(0).map(() => ({id: new Date().getTime() + Math.random(), count: 0}))
          };

  updateSum = (delta) => {
    this.props.dispatch({
      type: "UPDATE_SUM",
      payload: delta
    });
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
        <span>Sum: {this.props.sum}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sum: state.sum
});

connect(mapStateToProps)(CounterGroup)

export default connect(mapStateToProps)(CounterGroup)