import React, { Component } from 'react';
import DatePicker from './DatePicker';
import 'tachyons';

  class App extends Component {
    render() {
      return (
        <div className="App tc">
          <header className="App-header">
            <h1 className="App-title">Tipim</h1>
          </header>
          <p className="App-intro">
            Comming Soon...
          </p>
          <div>
          <DatePicker />
          </div>
        </div>
    );
  }
}

export default App;