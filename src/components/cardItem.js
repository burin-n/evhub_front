import React, { Component } from 'react';
import EventDetail from '../containers/eventDetail';
import ReactDOM from 'react-dom';

export default class CardListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'isClicked': false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    handleClick() {
        //EventDetail
        //<EventDetail eventData={this.props.card} />
        this.setState({'isClicked': true});

        // $('#myContent').removeClass('blur-out');
        // $('#myContent').addClass('blur-in');

        //console.log(this.state.isClicked)
        //var domChild = '<div class="mask-all-active"><div class="text-right" onClick="hideDetail()"><span class="glyphicon glyphicon-remove custom-text" aria-hidden="true"></span></div><div class="detail-pane text-left"><div class="row"><div class="col-xs-8"><img src="./resource/img/event-icon/iCon-09.jpeg" class="profile-image" />Channel name</div><div class="col-xs-4 text-right"><span class="glyphicon glyphicon-star text-larger favourite-text" aria-hidden="true"></span></div></div><div class="row"><div class="col-sm-6"><img src="./resource/img/test-poster/00.jpg" class="poster-image" /></div><div class="col-sm-6 description"><p>Test</p><p>Hello There</p><p>Something</p></div></div></div></div>';
        //$('.mask-all-container').append(domChild);
        //ReactDOM.render(<EventDetail eventData={eventData} />, document.querySelector('.mask-all-container'));
    }

    handleExit() {
        this.setState({'isClicked': false});

        // $('#myContent').removeClass('blur-in');
        // $('#myContent').addClass('blur-out');
    }

    componentWillMount() {
        this.setState({'isClicked': false});
    }

    render() {
        var eventDetail = <div></div>;
        if(this.state.isClicked) {
            eventDetail = <EventDetail eventData={this.props.card} onExit={this.handleExit} />;
        }


        if(!this.props.card.profile) { //is undefined
            return (
                    <div className="inline">
                        <div className="mask-all-container">
                            {eventDetail}
                        </div>
                        <div className="cards" onClick={this.handleClick} >
                            <img src={this.props.card.poster} className="cards-image-top" alt="poster" />
                            <div className="mask-container">
                                <div className="mask">
                                    <div className="hidden-info-bg">
                                        <div className="info-container">
                                            <p><b>Event: </b> {this.props.card.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            );
        }

        return (
            <div className="inline">
                <div className="mask-all-container">
                    {eventDetail}
                </div>
                <div className="cards" onClick={this.handleClick} >
                    <img src={this.props.card.poster} className="cards-image-top" alt="poster" />
                    <div className="profile-container">
                        <img src={this.props.card.profile} className="profile-image" alt="profile" />
                    </div>
                    <div className="mask-container">
                        <div className="mask">
                            <div className="hidden-info-bg">
                                <div className="info-container">
                                    <p><b>Event: </b> {this.props.card.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
