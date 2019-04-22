import React, { Component } from 'react';
import '../styles/Home.scss';
import { withRouter, Link, Route, Redirect } from 'react-router-dom';
import Stories from './Stories';
import ReadNow from './ReadNow';

class Home extends Component {

  componentDidMount () {
    window.addEventListener('resize', evt => {
      let x = window.matchMedia("(min-width: 800px)")
      this.renderHome(x)
      this.forceUpdate()
    })
  }

  renderHome = (x) => {
    if (x.matches) {
      return (
        <div className="HomeContainer">

          <div className="BlurbContainer">
            <h1> Stay hungry. Stay foolish. </h1>
            <h3> Learn from the hottest startups in the world. </h3>
            <ReadNow />
          </div>

          <div className="BannerContainer">
            <h1> Smart tools for founders. </h1>
            <h3> 
              LearnStart is the simplest way for startup founders
              to discover inspiring stories from startup founders 
              from all over the world, all in one place.
            </h3>
          </div>

          <div className="PageContainer">
            <div className="IntroTextContainer">
              <h1> Only the hottest startups. </h1>
              <h3> 
                 We hand-select only the hottest startups and our 
                 expert copywriters interview and produce every story.
              </h3>
            </div>
            <div className="ContentContainer"/> 
          </div>

          <div className="PageContainer">
            <div className="ContentContainer"/>
            <div className="IntroTextContainer"> 
              <h1> Simplest way to read. </h1>
              <h3> 
                 Learn from your phone or from your computer, and continue
                 where you left off anytime.
              </h3>
            </div>
          </div>

          <div className="PageContainer">
            <div className="IntroTextContainer">
              <h1> Free. Forever. </h1>
              <h3> 
                 We're a non-profit project supported by Silicon Valley's
                 top VCs and startup incubators. You won't have to pay a cent.
              </h3>
            </div>
            <div className="ContentContainer"/> 
          </div>

          <div className="FooterContainer">
            <h1> Let's get started. </h1>
            <ReadNow />
          </div>
        </div>
      )
      
    } else {
            return (
        <div className="HomeContainer">

          <div className="BlurbContainer">
            <h1> Stay hungry. Stay foolish. </h1>
            <h3> Learn from the hottest startups in the world. </h3>
            <ReadNow />
          </div>

          <div className="BannerContainer">
            <h1> Smart tools for founders. </h1>
            <h3> 
              LearnStart is the simplest way for startup founders
              to discover inspiring stories from startup founders 
              from all over the world, all in one place.
            </h3>
          </div>

          <div className="PageContainer">
            <div className="ContentContainer"/> 
            <div className="IntroTextContainer">
              <h1> Only the hottest startups. </h1>
              <h3> 
                 We hand-select only the hottest startups and our 
                 expert copywriters interview and produce every story.
              </h3>
            </div>
          </div>

          <div className="PageContainer">
            <div className="ContentContainer"/>
            <div className="IntroTextContainer"> 
              <h1> Simplest way to read. </h1>
              <h3> 
                 Learn from your phone or from your computer, and continue
                 where you left off anytime.
              </h3>
            </div>
          </div>

          <div className="PageContainer">
            <div className="ContentContainer"/> 
            <div className="IntroTextContainer">
              <h1> Free. Forever. </h1>
              <h3> 
                 We're a non-profit project supported by Silicon Valley's
                 top VCs and startup incubators. You won't have to pay a cent.
              </h3>
            </div>
          </div>

          <div className="FooterContainer">
            <h1> Let's get started. </h1>
            <ReadNow />
          </div>
        </div>
      )
    }
  }

  render() {
    let x = window.matchMedia("(min-width: 800px)")
    return (
      <div>
        {this.renderHome(x)}
      </div>
    );
  }
}

export default Home;
