import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types'; // ES6
import 'tachyons';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       //should contain: (DatePicker, shift, adj, tipsInput)
//     }
//   }

  class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="App tc">
        <header className="App-header">
          <h1 className="App-title">Tipim</h1>
        </header>
        <p className="App-intro">
          Comming Soon...
        </p>
        <DatePicker 
          dateFormat="DD/MM/YYYY"
          isClearable={true}
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
