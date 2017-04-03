import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
  constructor(){
    super()
    this.state = {
      name: 'Daniel',
      title: 'Welcome!'
    };
  }
  render() {
    setTimeout(() => {
      this.setState({title: 'Welcome Daniel!'})
    },2000);
    return (
      <div>
        {this.state.name}
        <Header title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
