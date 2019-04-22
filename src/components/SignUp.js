import React, { Component } from 'react';
import '../styles/SignUp.scss';
import { toggleSignUp } from '../actions';
import { connect } from 'react-redux';

class SignUp extends Component {

  closeSignUp = () => {
    this.props.dispatch(toggleSignUp(false))
  }

  signIn = (e) => {
    e.preventDefault();
    this.closeSignUp();
  }

  render() {
    const { showSignUp } = this.props;
    console.log('showSignUp', showSignUp)
    return (
      <div>
        { showSignUp 
          //|| showSignUp === undefined // uncomment this line to see the signup
          ? (

          <div className="SignUpContainer">

            <div className="BackGroundDim"/>

            <div className="SignUpWidgetContainer">
              <div className="CloseSignUpWindow" onClick={this.closeSignUp}> 
                X
              </div>
              <h2> Sign Up </h2>
              <form className="SignUpForm"> 
                <div className="SignUpInputContainer">
                  <input type="text" className="SignUpInput"/>
                  <input type="text" className="SignUpInput"/>
                </div>
                <button className="ContinueButtonContainer" onClick={this.signIn}> Continue </button>
              </form>
            </div>
          </div>

          ) : null }
      </div>
    );
  }
}

const mapStateToProps = ({ showSignUp }) => {
  return { showSignUp : showSignUp }
}

export default connect (mapStateToProps) (SignUp);
