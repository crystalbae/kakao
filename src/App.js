import React, { Component } from 'react';
import Intro from './Intro.js';
import Emergency from './Emergency.js';
import Charge from './Charge.js';
import Interest from './Interest.js';
import Apply from './Apply.js';
import CheckCard from './CheckCard.js';
import Question from './Question.js';
import Footer from './Footer.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <p>kakao<span>bank</span></p>
        </div>
        <div className="App-contents">
          <Intro />
          <Emergency />
          <Charge />
          <Interest />
          <Apply />
          <CheckCard />
          <Question />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
