import React, { Component } from 'react';
import EventDetail from '../containers/eventDetail';
import { Carousel } from 'react-bootstrap';

let tmp = null;

export default class BootstrapCarousel extends Component {
    constructor(props) {
        super(props);
        //Require imageList property
        //console.log(this.props.imageList);

        this.state = {
            'isClicked': false,
            'maskedDOM': null,
            'index': 0,
            'direction': null
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleClick(data) {
        this.setState({
            ...(this.state),
            'isClicked': true,
            'maskedDOM': <EventDetail eventData={data} onExit={this.handleExit} />
        });
    }

    handleSelect(selectedIndex, e) {
        // alert('selected=' + selectedIndex + ', direction=' + e.direction);
        this.setState({
            ...(this.state),
            index: selectedIndex,
            direction: e.direction
        });
    }

    handleExit() {
        this.setState({
            ...(this.state),
            'isClicked': false,
            'maskedDOM': <div></div>
        });
    }

    componentWillMount() {
        tmp = setInterval(() => {
            this.setState({...(this.state), 'index': (this.state.index +1)%(this.props.imageList.length), 'direction': 'next' });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(tmp);
    }

    pauseActive() {
        clearInterval(tmp);
    }

    resumeActive() {
        tmp = setInterval(() => {
            this.setState({...(this.state), 'index': (this.state.index +1)%(this.props.imageList.length), 'direction': 'next' });
        }, 3000);
    }

    render() {
        //<div className="item active" key={index} onClick={() => this.test(item)}>

        const carousel_item = this.props.imageList.map((item, index) => {

            var name = "Poster" + index;

            return (
                <Carousel.Item key={index} onClick={() => this.handleClick(item)} >
                    <img alt={name} src={item.url} />
                    <Carousel.Caption>
                        <h3>{item.header}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });

        var eventDetail = this.state.maskedDOM;

        return (
            <div onMouseOver={this.pauseActive} onMouseOut={this.resumeActive.bind(this)}>
                <div className="mask-all-container">
                    {eventDetail}
                </div>
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    {carousel_item}
                </Carousel>
            </div>
        );
    }
}
