import React, { Component } from 'react';
import './App.css';
import './components/start.css';
import './components/gaming.css';
import './components/open.css';

import Start from './components/start';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Start />
      </div>
    );
  }
}

export default App;
