import React, { Component } from 'react';
import Counter from './Counter';
import { connect } from "react-redux";

class CounterGroup extends Component {
  // state = {
  //           counters: new Array(this.props.gpSize).fill(0).map(() => ({id: new Date().getTime() + Math.random(), count: 0}))
  //         };

  componentWillMount() {
    this.props.dispatch({
      type: "GENERATE_COUNTER",
      payload: this.props.gpSize
    });
  }

  updateSum = (delta) => {
    this.props.dispatch({
      type: "UPDATE_SUM",
      payload: delta
    });
  };

  updateCount = (id, count) => {
    this.props.dispatch({
      type: "UPDATE_COUNT",
      payload: {id: id, count: count}
    });
  };

  render() {
    return (
      <div>
        {this.props.counters.map((counter) => 
          <Counter id = {counter.id} count = {counter.count} onUpdate = {this.updateCount} onUpdateSum = {this.updateSum} />
        )}
        <span>Sum: {this.props.sum}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sum: state.sum,
  counters: state.counters
});

connect(mapStateToProps)(CounterGroup)

export default connect(mapStateToProps)(CounterGroup)