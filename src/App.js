import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Carousel} from "./components/carousel";
import Header from "./components/header";
import ItemPage from "./components/item_page"

console.log("Carousel: ", Carousel);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Header />
          <Carousel />
          <ItemPage />
        </div>
        <p className="App-intro">
          wait? wheres the fucking webpack config?
        </p>
      </div>
    );
  }
}

export default App;
