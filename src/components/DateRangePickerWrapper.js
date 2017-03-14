import React from 'react';
import { DateRangePicker } from 'react-dates';

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
    if(this.props.onDateChange != null) {
        this.props.onDateChange( (startDate) ? startDate.toISOString() : "" , (endDate) ? endDate.toISOString() : "" );
    }
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
        <div className="inline text-left">
            <DateRangePicker
              {...this.props}
              id={this.props.id}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
              isOutsideRange={() => false}
            />
        </div>
    );
  }
}

export default DateRangePickerWrapper;
