import React from 'react';

class NewsPage extends React.Component {
  render() {
    console.log('news Page: ', this.props);
    return <p>news</p>;
  }
}

export default NewsPage;