import React, { Component } from 'react';
import CarouselTop from '../components/carousel-top';
import CardList from '../components/cardList';
import TopNavBar from '../components/navbar';

import { getNewEvent, searchByDate } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HomePage extends Component {

    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            'cardList_1': [
                {
                    'title': 'Hello',
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
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '4',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '7',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '8',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 10',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '9',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 11',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '10',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 12',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '11',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 13',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '12',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 14',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '13',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 15',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '14',
                    'poster': '/resource/img/Hub/New_big_00.png'
                }
            ],
            'cardList_2': [
                {
                    'title': 'Hello 4',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '1',
                    'poster': '/resource/img/Hub/Hot_big_00.png',
                    'profile': '/resource/img/event-icon/iCon-01.jpeg'
                },
                {
                    'title': 'Hello 5',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '2',
                    'poster': '/resource/img/Hub/Hot_big_01.png'
                },
                {
                    'title': 'Hello 6',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '3',
                    'poster': '/resource/img/Hub/Hot_big_02.png',
                    'profile': '/resource/img/event-icon/iCon-02.jpeg'
                },
                {
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '4',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '7',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '8',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 10',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '9',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 11',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '10',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 12',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '11',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 13',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '12',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 14',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '13',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 15',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '14',
                    'poster': '/resource/img/Hub/New_big_00.png'
                }
            ],
            'cardList_3': [
                {
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '1',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '2',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '3',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 7',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '4',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 8',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '7',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 9',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '8',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 10',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '9',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 11',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '10',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 12',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '11',
                    'poster': '/resource/img/Hub/New_big_00.png'
                },
                {
                    'title': 'Hello 13',
                    'date': 'unknown',
                    'view count': 20,
                    'id': '12',
                    'poster': '/resource/img/Hub/New_big_02.png'
                },
                {
                    'title': 'Hello 14',
                    'date': 'unknown',
                    'view count': 10,
                    'id': '13',
                    'poster': '/resource/img/Hub/New_big_03.png',
                    'profile': '/resource/img/event-icon/iCon-03.jpeg'
                },
                {
                    'title': 'Hello 15',
                    'date': 'unknown',
                    'view count': 30,
                    'id': '14',
                    'poster': '/resource/img/Hub/New_big_00.png'
                }
            ],
            'imageList_top_carousel': [
                {
                    'url': './resource/img/Carousel/00.jpg',
                    'header': 'Event 1 Name',
                    'description': 'Blah Blah Blah'
                },
                {
                    'url': './resource/img/Carousel/01.jpg',
                    'header': 'Event 2 Name',
                    'description': 'Blah Blah Blah'
                },
                {
                    'url': './resource/img/Carousel/02.jpg',
                    'header': 'Event 3 Name',
                    'description': 'Blah Blah Blah'
                },
                {
                    'url': './resource/img/Carousel/00.jpg',
                    'header': 'Event 4 Name',
                    'description': 'Blah Blah Blah'
                },
                {
                    'url': './resource/img/Carousel/01.jpg',
                    'header': 'Event 5 Name',
                    'description': 'Blah Blah Blah'
                },
            ],
            'cardList_tag' : [
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
              ],
              'viewAll': [true, true, true]
        };

        this.onViewAllClick = this.onViewAllClick.bind(this);

    }

    componentWillMount() {
        this.props.getNewEvent(5); //working
    }

    componentDidUpdate() {
        if(this.props.fetchNewEventsObject.response != null) console.log(this.props.fetchNewEventsObject.response.events.map((event) => { return `${event._id} ${event.picture_large_zero}` }));
    }

    onViewAllClick(index) {
        let newViewAll = [...(this.state.viewAll)];
        newViewAll[index] = !newViewAll[index];
        this.setState({
            ...(this.state),
            'viewAll': newViewAll
        })
    }

    render() {
        return (
            <div>
                <TopNavBar page="home" />
                <div id="myContent">
                    <CarouselTop imageList={this.state.imageList_top_carousel} />
                    <div className="container margin-top-60">
                        <h1 className="inline margin-right-15">First</h1>
                            <a onClick={() => { this.onViewAllClick(0); }}>
                                View all <span className="glyphicon glyphicon-menu-right"></span>
                            </a>
                            <CardList cards={(this.state.viewAll[0]) ? this.state.cardList_1.slice(0,(this.state.cardList_1.length > 5) ? 5 : this.state.cardList_1.length ) : this.state.cardList_1} isLine={this.state.viewAll[0]} />
                        <h1 className="inline margin-right-15">Second</h1>
                            <a onClick={() => { this.onViewAllClick(1); }}>
                                View all <span className="glyphicon glyphicon-menu-right"></span>
                            </a>
                            <CardList cards={(this.state.viewAll[1]) ? this.state.cardList_2.slice(0,(this.state.cardList_2.length > 5) ? 5 : this.state.cardList_2.length ) : this.state.cardList_2} isLine={this.state.viewAll[1]} />
                        <h1 className="inline margin-right-15">Third</h1>
                            <a onClick={() => { this.onViewAllClick(2); }}>
                                View all <span className="glyphicon glyphicon-menu-right"></span>
                            </a>
                            <CardList cards={(this.state.viewAll[2]) ? this.state.cardList_3.slice(0,(this.state.cardList_3.length > 5) ? 5 : this.state.cardList_3.length ) : this.state.cardList_3} isLine={this.state.viewAll[2]} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { fetchNewEventsObject: state.fetchNewEvents };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getNewEvent, searchByDate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
