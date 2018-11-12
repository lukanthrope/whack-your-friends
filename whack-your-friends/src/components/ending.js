import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gaming from './gaming';

class Ending extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sound: 'OFF'
		};

		this.handleClick = this.handleClick.bind(this);
		this.play = this.play.bind(this);
	}

	componentDidMount() {
  		this.Scoring();	

  		let sound = localStorage.getItem('Sound');
  		if (sound == null)
				sound = 'ON';
			this.setState({sound: sound});

			localStorage.setItem('Sound', this.state.sound);	
	}

	handleClick() {
		if (this.state.sound === 'OFF')
			this.setState({sound: 'ON'})
		else
			this.setState({sound: 'OFF'});

		localStorage.setItem('Sound', this.state.sound);
	}

	Scoring() {
		let hightScore = localStorage.getItem('HightScore');
		if (hightScore == null)
			hightScore = 0;
		
  		if (hightScore <= this.props.score) {
  			this.setState({hightScore: hightScore});
  			console.log(true);
  			localStorage.setItem('HightScore', this.props.score);
  		}
  		else {
  			this.setState({hightScore: hightScore})
  		}
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
      	<h1 className="timesup">Time's up</h1>
      	<h2>	
      		<span className="firstOne">score: {this.props.score}</span>
      		<span className="secondOne">HightScore: {this.state.hightScore}</span>
      	</h2> 
      	<h2 className="play replay" onClick={this.play}>replay</h2>	 
      </div>
    );
  }
}

export default Ending;
	