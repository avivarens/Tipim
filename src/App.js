import React, { Component } from 'react';
import DatePicker from './DatePicker';
import 'tachyons';


class App extends Component {
  constructor() {
    super()
    this.state = {
      //should contain: (date, shift, adj, tipsInput)
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title tc">Tipim</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
