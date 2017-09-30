import React, { Component } from 'react';
import HeroList from './HeroList.js';
import HeroDetail from './HeroDetails.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="screen">
          <HeroList/>
          <HeroDetail/>
        </div>
      </div>
    );
  }
}
