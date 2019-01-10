import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gaming from './gaming';
import Open from './open';
import clickSound from './audio/click.mp3'; 

class Ending extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sound: 'OFF',
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
  		this.Scoring();	

  		let sound = localStorage.getItem('Sound');
  		if (sound == null)
				sound = 'ON';
			this.setState({sound: sound});	
	}

	open() {
		this.setState({
			style: {
				'display': this.state.style.display === 'block' ? 'none' : 'block'
			}
		});
		this.playClickSound();
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
      	
      	<h1 className="timesup">{this.props.phrase}</h1>
      	<h2>	
      		<span className="firstOne">score: {this.props.score}</span>
      		<span className="secondOne">highscore: {this.state.hightScore}</span>
      	</h2> 

      	<h2
      		className="play replay"
      		onClick={() => {this.play(); this.playClickSound()}}
      		>
      		replay
      	</h2>	 
      </div>
    );
  }
}

export default Ending;
	