import React, { Component } from 'react';
import './App.css';
import Header from '../PageLayout/Header';
import Footer from '../PageLayout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row page-navigation">
          <Header />
        </div>
        <div>{this.props.children}</div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
