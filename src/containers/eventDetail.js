import React, { Component } from 'react';
import { Link } from 'react-router';

import { getEvent } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class EventDetail extends Component {

    //require onExit from props

    constructor(props) {
        super(props);

        // this.props.id = "";
        //this.props.getEvent("5881d45d2d9ae35708911f05"); //working
    }

    componentWillMount() {
        if(this.props.id) {
            this.props.getEvent(this.props.id);
        }
    }

    render() {
        var tmpObj;

        if(typeof(this.props.eventData.profile) != "undefined") {
            tmpObj = (
                <Link to="/channel" className="col-xs-8">
                    <img src={this.props.eventData.profile} className="profile-image" />
                    Channel name
                </Link>
            );
        } else {
            tmpObj = (
                <Link to="/channel" className="col-xs-8">
                    <img src="./resource/img/event-icon/iCon-09.jpeg" className="profile-image" />
                    Channel name
                </Link>
            );
        }

        return (
            <div className="mask-all-active">
                <div className="text-right" onClick={this.props.onExit}>
                    <span className="glyphicon glyphicon-remove custom-text" aria-hidden="true"></span>
                </div>
                <div className="detail-pane text-left">
                    <div className="row top-head">
                        {tmpObj}
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={this.props.eventData.poster} className="poster-image" />
                        </div>
                        <div className="col-sm-6 description">
                            <p>{this.props.eventData.title}</p>
                            <p>{this.props.eventData.date}</p>
                            <p>Something<br />Something<br />Something<br />Something<br />Something<br />Something<br />Something</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { getEventObject: state.getEvent };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
