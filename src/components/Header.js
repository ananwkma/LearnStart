import React, { Component } from 'react';
import '../styles/Header.scss';
import { connect } from 'react-redux';
import { toggleSignUp } from '../actions';

class Header extends Component {

  openSignUp = () => {
    this.props.dispatch(toggleSignUp(true));
  }

  render() {
    return (
      <div className="HeaderContainer">
        <div className="LearnStart"> 
          <h2> LearnStart </h2>
        </div>
        <div className="SignUp" onClick={this.openSignUp}>
          <h3> Sign up </h3>
        </div>
      </div>
    );
  }
}

export default connect()(Header);
