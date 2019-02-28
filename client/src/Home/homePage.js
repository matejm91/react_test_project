import React from 'react';

class HomePage extends React.Component {
  render() {
    console.log('home Page: ', this.props);
    return <p>home</p>;
  }
}

export default HomePage;