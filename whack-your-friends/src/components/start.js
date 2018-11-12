import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gaming from './gaming';

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sound: 'ON',
			hightScore: 0
		};

		this.handleClick = this.handleClick.bind(this);
		this.play = this.play.bind(this);
	}

	componentDidMount() {
		let hightScore = localStorage.getItem('HightScore');
		let sound = localStorage.getItem('Sound');
		console.log(sound);
		if (hightScore == null)
			hightScore = 0;
		if (sound == null)
			sound = 'ON';

		this.setState({
			hightScore: hightScore,
			sound: sound
		});
	}

	handleClick() {
		if (this.state.sound === 'OFF')
			this.setState({sound: 'ON'});
		else
			this.setState({sound: 'OFF'});

		localStorage.setItem('Sound', this.state.sound);
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
      	<h2 className="stat score">HightScore: {this.state.hightScore}</h2>

      	<h1>Whack your friends!</h1> 
      	<h2 className="play" onClick={this.play}>play</h2> 
      </div>
    );
  }
}

export default Start;
	