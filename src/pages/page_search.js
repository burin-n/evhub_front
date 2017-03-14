import React, { Component } from 'react';
import CardList from '../components/cardList';
import DatePicker from '../components/datePicker';
import TopNavBar from '../components/navbar';
import { Link } from 'react-router';

import { searchEvent, searchChannel, searchByDate, searchEventTag } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        //this.props.searchEvent("Test"); // working
        //this.props.searchChannel("Test"); //working
        this.props.searchEventTag(["Camp"]); //not working
        //this.props.searchByDate("2017-01-01T05:00:00.000Z", "2017-01-21T05:00:00.000Z"); //working

        this.state = {
            'term': (this.props.location.query) ? this.props.location.query.term : '',
            'termInput': '',
            'dateStart': (this.props.location.query) ? this.props.location.query.dateStart : '',
            'dateEnd': (this.props.location.query) ? this.props.location.query.dateEnd : '',
        };

        this.loadRequirement();

        //Need cardList as props named searchResult
    }

    loadRequirement() {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './node_modules/react-dates/lib/css/_datepicker.css';
        link.media = 'all';
        head.appendChild(link);
    }

    getDate(startDate, endDate) {
        this.setState({
            ...(this.state),
            'dateStart': (startDate) ? startDate : "",
            'dateEnd': (endDate) ? endDate : ""
        })
        console.log(startDate, endDate);
    }

    onInputChange(event) {
        this.setState({
            ...(this.state),
            'termInput': event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            ...(this.state),
            'term': (this.state.termInput),
            'termInput': ''
        });
    }

    onSubmitDate(event) {
        //console.log(event);

    }

    render() {
        const searchResult = [
              {
                  'title': 'Hello 1',
                  'date': 'unknown',
                  'view count': 20,
                  'id': '1',
                  'poster': '/resource/img/Hub/New_big_00.png'
              },
              {
                  'title': 'Hello 2',
                  'date': 'unknown',
                  'view count': 10,
                  'id': '2',
                  'poster': '/resource/img/Hub/New_big_01.png',
                  'profile': '/resource/img/event-icon/iCon-00.jpeg'
              },
              {
                  'title': 'Hello 3',
                  'date': 'unknown',
                  'view count': 30,
                  'id': '3',
                  'poster': '/resource/img/Hub/New_big_02.png'
              },
              {
                  'title': 'Hello 4',
                  'date': 'unknown',
                  'view count': 20,
                  'id': '4',
                  'poster': '/resource/img/Hub/Hot_big_00.png',
                  'profile': '/resource/img/event-icon/iCon-01.jpeg'
              },
              {
                  'title': 'Hello 5',
                  'date': 'unknown',
                  'view count': 10,
                  'id': '5',
                  'poster': '/resource/img/Hub/Hot_big_01.png'
              },
              {
                  'title': 'Hello 6',
                  'date': 'unknown',
                  'view count': 30,
                  'id': '6',
                  'poster': '/resource/img/Hub/Hot_big_02.png',
                  'profile': '/resource/img/event-icon/iCon-02.jpeg'
              },
              {
                  'title': 'Hello 7',
                  'date': 'unknown',
                  'view count': 20,
                  'id': '7',
                  'poster': '/resource/img/Hub/New_big_02.png'
              },
              {
                  'title': 'Hello 8',
                  'date': 'unknown',
                  'view count': 10,
                  'id': '8',
                  'poster': '/resource/img/Hub/New_big_03.png',
                  'profile': '/resource/img/event-icon/iCon-03.jpeg'
              },
              {
                  'title': 'Hello 9',
                  'date': 'unknown',
                  'view count': 30,
                  'id': '9',
                  'poster': '/resource/img/Hub/New_big_00.png'
              },
              {
                  'title': 'Hello 10',
                  'date': 'unknown',
                  'view count': 20,
                  'id': '10',
                  'poster': '/resource/img/Hub/New_big_00.png'
              },
          ];

          let pStyle = {
              width: '100%',
              textAlign: 'center',
              paddingTop: '30px',
              marginBottom: '0px',
              paddingBottom: '0px'
          }

        return (
            <div>
                <TopNavBar page="search" />
                <div id="myContent">
                    <p style={pStyle}>
                        <h1>Search</h1>
                    </p>
                    <div className="top-search">
                        <div className="container">

                            <form className="text-larger margin-top-20 text-center" onSubmit={ this.onSubmit.bind(this) }>
                                <input className="no-glow search-inner-box-2" placeholder="Search" type="text" maxLength="100" id="searchInput" onChange={this.onInputChange.bind(this)} value={this.state.termInput} ></input>
                                <span className="button-search-container">
                                    <button type="submit" className="btn button-search-text-2"><span className="glyphicon glyphicon-search"></span></button>
                                </span>
                            </form>

                            <div className="text-center margin-top-20 date-super-container">
                                <span className="text-larger custom-date-picker-text">Search By Date</span>
                                <div className="date-container inline">
                                    <DatePicker id="date-picker-custom" onDateChange={this.getDate.bind(this)} />
                                    <div type="button" className="btn button-search-text-3" onClick={this.onSubmitDate.bind(this)} >
                                        <span className="glyphicon glyphicon-arrow-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        (this.state.term) ? (
                            <div className="container" id="search">
                                <h3 className="inline margin-right-15">Search result {(this.state.term) ? `of ${this.state.term}` : ''} </h3>
                                <div className="auto-margin">
                                    <CardList cards={searchResult} isLine={false} isLeft={false} />
                                </div>
                            </div>
                        ) : (<div></div>)
                    }
                </div>
            </div>
        );
    }
}

// <div className="container">
//     <h2 className="inline margin-right-15">#TagName</h2>
//     <p className="inline margin-15">xx results</p>
//     <span className="inline float-right">
//         <a href="#" className="pure-button"><span className="glyphicon glyphicon-menu-left"></span></a>
//         <p className="inline margin-15">page : 1 / x</p>
//         <a href="#" style={{textAlign: 'right'}} className="pure-button"><span className="glyphicon glyphicon-menu-right"></span></a>
//     </span>
//     <br />
//     <br />
//     <CardList cards={searchResult} />
// </div>

function mapStateToProps(state) {
    return { searchEventObject: state.searchEvent, searchChannelObject: state.searchChannel, searchTagObject: state.searchTag, searchDateObject: state.searchDate };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchEvent, searchEventTag, searchChannel, searchByDate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
