import React, { Component } from 'react';

class CounterGroupInput extends Component {
  render() {
    return (
      <div>
        <input type="number" ref="inputField"/>
        <button onClick = {this.props.refreshCounter} >Refresh Number of Counter(s)</button>
      </div>
    );
  }
}

export default CounterGroupInput;
