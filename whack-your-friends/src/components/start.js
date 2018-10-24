import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gaming from './gaming';

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sound: 'OFF'
		};

		this.handleClick = this.handleClick.bind(this);
		this.play = this.play.bind(this);
	}

	handleClick() {
		if (this.state.sound === 'OFF')
			this.setState({sound: 'ON'})
		else
			this.setState({sound: 'OFF'});
	}

	play() {
			ReactDOM.render (
				<Gaming />, document.getElementById('root')
			);
	}

  render() {
    return (
      <div className="App">
      	<h2 className="stat sound" onClick={this.handleClick}>Sound: {this.state.sound}</h2>
      	<h2 className="stat score">HightScore: {this.state.sound}</h2>

      	<h1>Whack your friends!</h1> 
      	<h2 className="play" onClick={this.play}>play</h2> 
      </div>
    );
  }
}

export default Start;
	