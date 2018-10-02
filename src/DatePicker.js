import React, {component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
 
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
    <DatePicker
      key='date' 
      dateFormat="DD/MM/YYYY"
      isClearable={true}
      selected={this.state.startDate}
      onChange={this.handleChange}
      />
    )  
  }
}

export default DatePicker;