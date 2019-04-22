import React, { Component } from 'react';
import '../styles/Header.scss';
import { withRouter, Link, Route, Redirect } from 'react-router-dom';
import Stories from './Stories';
import { connect } from 'react-redux';

class ReadNow extends Component {

  render() {
    return (
      <div className="ReadNowButtonContainer"> 
        <Link to='/stories' className="ReadNowLink">
          <h3 className="ReadNowText"> Read Now </h3> 
        </Link>
        <Route exact path='/stories' render={() => (
         <Stories />)}/>
      </div>
    );
  }
}

export default connect()(ReadNow);
