import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import TopNavBar from '../components/navbar';

import { getAllEvent } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

BigCalendar.momentLocalizer(moment);

var event = [
    //yyyy, mm, dd, hh, mm, ss
    //Jan = 0, first day of month = 0
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2017, 0, 0),
    'end': new Date(2017, 0, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2017, 0, 7),
    'end': new Date(2017, 0, 10)
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(2017, 0, 13, 0, 0, 0),
    'end': new Date(2017, 0, 20, 0, 0, 0)
  },

  {
    'title': 'DTS ENDS',
    'start': new Date(2017, 0, 6, 0, 0, 0),
    'end': new Date(2017, 0, 13, 0, 0, 0)
  },

  {
    'title': 'Some Event',
    'start': new Date(2017, 0, 9, 0, 0, 0),
    'end': new Date(2017, 0, 9, 0, 0, 0)
  },
  {
    'title': 'Conference',
    'start': new Date(2017, 0, 11),
    'end': new Date(2017, 0, 13),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(2017, 0, 12, 10, 30, 0, 0),
    'end': new Date(2017, 0, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Lunch',
    'start':new Date(2017, 0, 12, 12, 0, 0, 0),
    'end': new Date(2017, 0, 12, 13, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    'title': 'Meeting',
    'start':new Date(2017, 0, 12,14, 0, 0, 0),
    'end': new Date(2017, 0, 12,15, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start':new Date(2017, 0, 12, 17, 0, 0, 0),
    'end': new Date(2017, 0, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    'title': 'Dinner',
    'start':new Date(2017, 0, 12, 20, 0, 0, 0),
    'end': new Date(2017, 0, 12, 21, 0, 0, 0)
  },
  {
    'title': 'Birthday Party',
    'start':new Date(2017, 0, 13, 7, 0, 0),
    'end': new Date(2017, 0, 13, 10, 30, 0)
  }
];

var color = 150;

class CalendarPage extends Component {

    constructor(props) {
        super(props);

        this.props.getAllEvent(); //working
        this.state = {
            'event': []
        }

        document.getElementsByTagName("body")[0].style.cssText = "background-color: #F1F1F1 !important";
    }

    componentWillMount() {
        let fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", "../../node_modules/react-big-calendar/lib/css/react-big-calendar.css")

        if (typeof fileref!="undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.getAllEventObject.response != null) {
            let newEvent = [];
            nextprops.getAllEventObject.response.map((event) => {
                newEvent.push({
                    'title': event.title,
                    'start': new Date(Date.parse(event.date_start)),
                    'end': new Date(Date.parse(event.date_end))
                })
            });
            this.setState({...(this.state), 'event': newEvent});
        }
    }

    onEventClick(event) {
        console.log(event);
    }

    onSlotClick(slotInfo) {
        console.log(slotInfo);
        console.log(`selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
        `\nend: ${slotInfo.end.toLocaleString()}`);
    }

    eventStyleGetter(event) {
        color = (color+5)%(256-150) + 150;
        var backgroundColor = `rgb(${Math.floor(0.8*color)}, ${Math.floor(0.9*color)}, ${Math.floor(0.85*color)})`;
        var style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    }

    render() {
        return (
            <div>
                <TopNavBar page="calendar" />
                <section className="container" style={{marginTop: '30px'}} id="myContent">
                    <div className="favourite-page-body">
                        <h2 style={{textAlign: "center", marginBottom: '0px'}}>Calendar</h2>
                        <div style={{height: 'calc(100vh - 230px)', marginTop: '10px', background: '#FFF', padding: '15px', borderRadius: '5px', minWidth: '550px'}}>
                          <BigCalendar
                              selectable
                              events={this.state.event}
                              defaultView='month'
                              scrollToTime={new Date(1970, 1, 1, 6)}
                              defaultDate={new Date(Date.now())}
                              onSelectEvent={this.onEventClick}
                              onSelectSlot={this.onSlotClick}
                              eventPropGetter={(this.eventStyleGetter)}
                          />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { getAllEventObject: state.fetchAllEvents };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
