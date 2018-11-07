import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import face from './fac.png';
import Start from './start';

class Gaming extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: 60,
			score: 0,
			holes: {
				first: 'none',
				second: 'none',
				third: 'none',
				fourth: 'none',
				fifth: 'none',
				sixth: 'none',
			}
		};

		this.showHide = this.showHide.bind(this);
		this.punch = this.punch.bind(this);
		this.toMenu = this.toMenu.bind(this);
	}

	componentDidMount() {
		this.timer = setInterval(
			() => this.countTime()
		, 1000);
		this.sh = setInterval(this.showHide, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		clearInterval(this.sh);
	}

	countTime() {
		let t = --this.state.time;

		if (t === 1) {
			this.toMenu();
		} else {
		  this.setState({ time: t });
		}
	}

	toMenu() {
		ReactDOM.render(
				<Start />, document.getElementById('root')
		);
	}

	showHide() {
		const min = 0;
	  const max = 5;
	  const { holes } = this.state;
	  let rand = Math.floor(Math.random() * (max - min + 1) + min);
	  Object.keys(holes).map((key, index) => {
	  	if (index === rand) {
	  		holes[key] = 'block';
	  	}
	  });
	  console.log(rand);
	  this.setState({ holes });
	  setTimeout(() => {
		  Object.keys(holes).map((key, index) => {
		  	if (index === rand) {
		  		holes[key] = 'none';
		  	}
		  });
	  	this.setState({ holes });
	  }, 1200);
	}

	punch(event) {
		let currentScore = this.state.score;
		event.preventDefault();
		const currentKey = event.currentTarget.dataset.key; 

		const { holes } = this.state;
		if (holes[currentKey] !== 'none') {
			currentScore++;
		} else {
			currentScore--;
		}
		holes[currentKey] = 'none';

		this.setState({ score: currentScore < 0 ? 0 : currentScore, holes });
	}

	renderHoles () {
		const holes = this.state.holes;
		return Object.keys(holes).map(key => {
			return (
				<div key={key} className={`hole ${key}`} onClick={this.punch} data-key={key}>
	      	<img src={face} className={`eboss ${holes[key] === 'none' ? 'hidden' : 'block'}`} />
	    	</div>
	  	)
		})
		
	}

  render() {
    return (
    	<div className="outer-container">
    		<button className="btn change">change</button>
    		<button className="btn changeAll">change all</button>
    		<button className="btn menu" onClick={this.toMenu}>menu</button>
    		<h2 className="counter stat sound">{this.state.time}</h2>
    		<h2 className="counter stat score">Score: {this.state.score}</h2>
	      <div className="container">
	        {this.renderHoles()}
	      </div>
	    </div>
    );
  }
}

export default Gaming;