import React, { Component } from 'react';
import Header from './components/Header';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
