import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Open from './open';
import Gaming from './gaming';
import clickSound from './audio/click.mp3'; 

class Start extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sound: 'ON',
			hightScore: 0,
			showCropper: false,
			style: {
				'display': 'none'
			}
		};

		this.s = new Audio(clickSound);
		this.playClickSound = this.playClickSound.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.open = this.open.bind(this);
		this.play = this.play.bind(this);
	}

	componentDidMount() {
		let hightScore = localStorage.getItem('HightScore');
		let sound = localStorage.getItem('Sound');
		console.log(sound);
		if (hightScore == null) {
			hightScore = 0;
			localStorage.setItem('HightScore', hightScore)
		}
		if (sound == null)
			sound = 'ON';
		localStorage.setItem('Sound', sound);

		this.setState({
			hightScore: hightScore,
			sound: sound
		});
	}

	handleClick() {
		let sound = localStorage.getItem('Sound');
		if (sound === 'ON') {
			this.setState({sound: 'OFF'});
			localStorage.setItem('Sound', 'OFF');
		}
		else {
			this.setState({sound: 'ON'});
			localStorage.setItem('Sound', 'ON');
		}
	}

	open() {
		this.setState({
			style: {
				'display': this.state.style.display === 'block' ? 'none' : 'block'
			}
		});
		this.playClickSound();
	}

	play() {
			ReactDOM.render (
				<Gaming />, document.getElementById('root')
			);
	}

	playClickSound() {
		if (this.state.sound === 'ON') {
			const soundPlay = this.s.play();
			soundPlay.then(function() {

			}).catch(function(err) {
				console.log(err);
			});
		}
	}

  render() {
    return (
      <div className="App">
      	<Open 
      		style={this.state.style}
      		click={this.open}
      		/>
      	<button
      		className="btn menu"
      		onClick={() => {this.open(); this.playClickSound()}}
      		>
      		change enemies
      	</button>
      	
      	<h2
      		className="stat sound"
      		onClick={() => {this.handleClick(); this.playClickSound()}}
      		>
      		Sound: {this.state.sound}
      	</h2>
      	<h2 className="stat score">
      		Highscore: {this.state.hightScore}
      	</h2>

      	<h1>Whack a friend!</h1> 
      	
      	<h2
      		className="play"
      		onClick={() => {this.play(); this.playClickSound()}}
      		>
      		play
      	</h2>
      </div>
    );
  }
}

export default Start;
	