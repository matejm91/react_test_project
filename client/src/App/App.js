import React, { Component } from 'react';
import './App.css';
import Header from '../PageLayout/Header';
import Footer from '../PageLayout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
