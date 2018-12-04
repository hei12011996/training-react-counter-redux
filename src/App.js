import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroupInput from './components/CounterGroupInput';
import CounterGroup from './components/CounterGroup';

class App extends Component {

	state = {gpSize: 0};

  getNumberOfCountersFromInputBox = () => {
    let inputField = this.refs.CounterGroupInput.refs.inputField;
    let numberOfCounters = inputField.value;
    return numberOfCounters;
  }

	refreshCounter = () => {
    let numberOfCounters = this.getNumberOfCountersFromInputBox();
    this.state.gpSize = Number(numberOfCounters);
    this.setState(this.state);
	}

  render() {
    return (
    	<div>
    		<CounterGroupInput refreshCounter={this.refreshCounter} ref="CounterGroupInput" />
      	<CounterGroup key={new Date().getTime() + Math.random()} gpSize={this.state.gpSize} />
    	</div>
    );
  }
}

export default App;
