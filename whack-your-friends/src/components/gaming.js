import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import face from './fac.png';
import Ending from './ending';

class Gaming extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: 60,
			score: 0,
			face: null,
			holes: {
				first: 'none',
				second: 'none',
				third: 'none',
				fourth: 'none',
				fifth: 'none',
				sixth: 'none',
			}
		};

		this.interval = 900;

		this.showHide = this.showHide.bind(this);
		this.punch = this.punch.bind(this);
		this.toMenu = this.toMenu.bind(this);
	}

	componentDidMount() {
		this.timer = setInterval(
			() => this.countTime()
		, 1000);
		this.sh = setInterval(this.showHide, 900);

		let thisFace = localStorage.getItem('face');
		if(thisFace == null) 
			this.setState({face: face});
		else
			this.setState({face: thisFace})
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		clearInterval(this.sh);
	}

	countTime() {
		let t = this.state.time - 1;

		if (t === 1) {
			this.toMenu('Time\'s up!');
		} else {
		  this.setState({ time: t });
		}
	}

	toMenu(phrase) {
		ReactDOM.render(
				<Ending
					score={this.state.score}
					phrase={phrase}
					 />
				, document.getElementById('root')
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

	  if (this.state.time === 20)
	  	this.interval -= 100;
	  else if (this.state.time === 30)
	  	this.interval -= 100;
	  else if (this.state.time === 37)
	  	this.interval -= 100;
	  else if (this.state.time === 48)
	  	this.interval -= 100;

	  console.log(this.interval);
	  
	  this.setState({ holes });
	  setTimeout(() => {
		  Object.keys(holes).map((key, index) => {
		  	if (index === rand) {
		  		holes[key] = 'none';
		  	}
		  });
	  	this.setState({ holes });
	  }, this.interval);
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

		console.log(this.state.score);

		this.setState({ score: currentScore < 0 ? 0 : currentScore, holes });
	}

	renderHoles () {
		const holes = this.state.holes;
		return Object.keys(holes).map(key => {
			return (
				<div key={key} className={`hole ${key}`} onClick={this.punch} data-key={key}>
	      	<img src={this.state.face} className={`eboss ${holes[key] === 'none' ? 'hidden' : 'block'}`} />
	    	</div>
	  	)
		})
		
	}

  render() {
    return (
    	<div className="outer-container">
    		<button className="btn menu" onClick={() => this.toMenu('Alright')}>menu</button>
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