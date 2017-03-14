import React, { Component } from 'react';
import DateRangePickerWrapper from './DateRangePickerWrapper';

export default class DatePicker extends Component {

    constructor(props) {
        super(props);
        //DateRangePicker
    }

    render() {

        return (
            <DateRangePickerWrapper numberOfMonths={1} showClearDates id={this.props.id} onDateChange={this.props.onDateChange}/>
        );
    }
}
