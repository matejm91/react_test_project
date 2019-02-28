import React from 'react';

class PageBase extends React.Component {
  render() {
    console.log('props PAGE BASE: ', this.props);
    return <p>test</p>;
  }
}

export default PageBase;