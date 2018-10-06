import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DatePicker from './DatePicker';
import TimeSelect from './TimeSelect';
import './App.css';
import 'typeface-roboto';
import 'tachyons';

  class App extends Component {

     constructor() {
      super();
      this.state = {
       date: '',
       shift: ''
      }
    }

     onDateChange = (event) => {
        console.log(event.target.value);
      }

    render() {
      return (
        <div className="App tc">
          <header className="App-header">
            <h1 className="App-title">TIPIM</h1>
          </header>
          <p className="App-intro">
            Comming Soon...
          </p>
          <div className='abc'>            
              <DatePicker className='date' onDateChange={this.state.onDateChange} />
                <div>
                <Button variant="contained" color="secondary">
                  Morning
                </Button>
                <Button variant="contained" color="primary">
                  Evening
                </Button>
                </div>
          </div>
          <div className='mt5'>
            <TimeSelect />
          </div>
        </div>
    );
  }
}

export default App;