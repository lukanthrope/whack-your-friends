import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gaming from './gaming';
import Open from './open';

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

  render() {
    return (
      <div className="App">
      	<Open 
      		style={this.state.style}
      		click={this.open}
      		/>
      	<button className="btn menu" onClick={this.open}>change enemies</button>

      	<h2 className="stat sound" onClick={this.handleClick}>Sound: {this.state.sound}</h2>
      	<h1 className="timesup">{this.props.phrase}</h1>
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
	