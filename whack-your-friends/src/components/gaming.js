import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import face from './fac.png';
import Start from './start';

class Gaming extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: 60,
			score: 0
		};

		this.score = 0;

		this.punch = this.punch.bind(this);
		this.toMenu = this.toMenu.bind(this);
	}

	componentDidMount() {
		if (this.state.time === 0) {
			this.toMenu();
		}
		this.timer = setInterval(
			() => this.countTime()
		, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	countTime() {
		let t = --this.state.time;
		this.setState({time: t});

		if (t === 0) {
			this.toMenu();
		}
	}

	toMenu() {
		ReactDOM.render (
				<Start />, document.getElementById('root')
		);
	}

	punch(event) {
		let currentScore = this.state.score;
		event.preventDefault();
		console.log(event.currentTarget.className);

		this.setState({score: currentScore});
	}

	miss() {
		let currentScore = this.state.score;
		currentScore--;
		this.setState({score: currentScore});	
	}

  render() {
    return (
    	<div className="outer-container">
    		<button className="btn change">change</button>
    		<button className="btn changeAll">change all</button>
    		<button className="btn menu" onClick={this.toMenu}>menu</button>

    		<h2 className="counter stat sound">{this.state.time}</h2>
    		<h2 className="counter stat score">Score: {this.score}</h2>

	      <div className="container">
	        <div className="hole first" onClick={() => this.score--}>
	        	<img src={face} onClick={() => this.score + 2} className="eboss"/>
	        </div>
	        <div className="hole second" onClick={this.punch}>
	        	<img src={face} onClick={this.punch} className="eboss"/>
	        </div>
	        <div className="hole third" onClick={this.punch}>
	        	<img src={face} onClick={this.punch} className="eboss"/>
	        </div>
	        <div className="hole fourth" onClick={this.punch}>
	        	<img src={face} onClick={this.punch} className="eboss"/>
	        </div>
	        <div className="hole fifth" onClick={this.punch}>
	        	<img src={face} onClick={this.punch} className="eboss"/>
	        </div>
	        <div className="hole sixth" onClick={this.punch}>
	        	<img src={face} onClick={this.punch} className="eboss"/>
	        </div>
	      </div>
	    </div>
    );
  }
}

export default Gaming;