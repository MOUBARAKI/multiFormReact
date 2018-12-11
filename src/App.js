import React, { Component } from 'react';
import GlobalForm from './components/GlobalForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GlobalForm/>
        </header>
      </div>
    );
  }
}

export default App;
