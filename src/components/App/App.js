import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Comments from './../Comments/Comments';
import Feelings from './../Feelings/Feelings';
import Support from './../Support/Support';
import Understanding from './../Understanding/Understanding';
import ReviewComments from './../ReviewComments/ReviewComments';
import ThankYou from './../ThankYou/ThankYou';
import { HashRouter as Router, Route } from 'react-router-dom';



class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={Feelings} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/review-comment" component={ReviewComments} />
            <Route exact path="/thank-you" component={ThankYou} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
