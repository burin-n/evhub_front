import React, { Component } from 'react';
import CardList from '../components/cardList';
import TopNavBar from '../components/navbar';

import { getChannel } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChannelPage extends Component {

    constructor(props) {
        super(props);

        // console.log(this.props);
        //this.props.getChannel("5881ce872d9ae35708911f04"); //working

        this.state = {
            isBioExpand: false,
            windowWidth: window.innerWidth
        };

        this.updateDimensions = this.updateDimensions.bind(this);
        this.toggleBioExpand = this.toggleBioExpand.bind(this);

        //$(document.body).css("background", "#F1F1F1", "important");
        document.getElementsByTagName("body")[0].style.cssText = "background-color: #F1F1F1 !important";
    }

    bioCut(full_bio) {

        let sizeLimit = 0;

        switch(this.getSizeClass(window.innerWidth)) {
            case "large":
                sizeLimit = 300;
                break;
            case "medium":
                sizeLimit = 200;
                break;
            case "small":
                sizeLimit = 150;
                break;
            default:
                sizeLimit = 100;
        }

        let isCutable = (full_bio.length >= sizeLimit);

        if(this.state.isBioExpand || full_bio.length < sizeLimit) return {bio: full_bio, isCut: false, isCutable };
        return {bio: full_bio.slice(0, sizeLimit) + "...", isCut: true, isCutable };

    }

    toggleBioExpand() {
        this.setState({...(this.state), isBioExpand: !this.state.isBioExpand});
    }

    getSizeClass(width) {
        if(width > 977) return "large";
        if(width > 733) return "medium";
        if(width > 488) return "small";
        return "compact";
    }

    updateDimensions() {

        const tmpFunc = this.getSizeClass;

        if(tmpFunc(this.state.windowWidth) != tmpFunc(window.innerWidth)) {
            this.setState({...(this.state), windowWidth: window.innerWidth});
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        const cardList = [
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
            }
        ];

        let full_bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum sagittis lorem, non vehicula nisi fringilla eget. Duis egestas mollis faucibus. Vivamus rhoncus eros vel enim interdum iaculis aliquam ac sem. Donec sagittis sed enim vitae rutrum. Curabitur pellentesque velit sit amet purus congue, sodales hendrerit justo suscipit. Nullam nec mi vulputate, ultrices lacus vitae, dapibus est. Morbi rhoncus arcu vel justo condimentum congue. Donec efficitur, mauris in dapibus bibendum, neque augue tincidunt lorem, quis scelerisque arcu dolor sit amet diam. Suspendisse a rhoncus dolor.";

        let bio = this.bioCut(full_bio).bio;
        let more = (this.bioCut(full_bio).isCutable) ? (<a onClick={this.toggleBioExpand}>more</a>): '';
        let less = (this.bioCut(full_bio).isCutable) ? (<a onClick={this.toggleBioExpand} style={{marginLeft: '5px'}} >less</a>): '';

        return (
            <div>
                <TopNavBar page="channel" />
                <div className="favourite-page-body" style={{marginTop: '20px'}} id="myContent">
                    <section className="channel-container">
                        <section className="channel-profile">
                            <img className="channel-img" src="./resource/img/event-icon/iCon-00.jpeg" />
                            <span className="name">Channel name</span>
                            <span className="location">Location</span>
                            <span className="bio">{bio}{(this.state.isBioExpand) ? less : more }</span>
                        </section>
                        <section className="channel-event">
                            <CardList cards={cardList} isLine={false} />
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { getChannelObject: state.getChannel };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelPage);
