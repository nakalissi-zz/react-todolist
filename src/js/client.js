import React from 'react';
import ReactDOM from 'react-dom';

// import Layout from './components/Layout';

class Layout extends React.Component {
  render() {
    return (
      <h1>Hellp world</h1>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
