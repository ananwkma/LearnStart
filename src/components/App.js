import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SignUp from './SignUp';
import Home from './Home';

// signup functionality incomplete -- see SignUp.js to view the widget

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppContainer"> 
          <Header />
          <Home />
          <SignUp />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ showSignUp }) => {
  return { showSignUp : showSignUp }
}

export default connect(mapStateToProps)(App);
