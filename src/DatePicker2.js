import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
 
class DatePicker2 extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <DatePicker
          key='date'
          dateFormat="DD/MM/YYYY"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default DatePicker2;