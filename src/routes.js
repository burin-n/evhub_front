import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import ChannelPage from './pages/page_channel';
import HomePage from './pages/page_home';
import SearchPage from './pages/page_search';
import CalendarPage from './pages/page_calendar';

const timeRemain = 5;

class DefaultFallback extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = { timeRemain };
    }

    backHome() {
        let object = this;
        var tmp = new Promise(
            (resolve, reject) => {
                var tmp = setInterval(() => {
                    object.setState({'timeRemain': (object.state.timeRemain - 1) })
                }, 1000);

                setTimeout(
                    () => {
                        clearInterval(tmp);
                        resolve(null);
                    }, timeRemain * 1000);
            }
        ).then(
            () => {
                this.context.router.push('/');
            }
        );
    }

    componentDidMount() {
        this.backHome();
    }

    render() {
        return (
            <div className="container">
                Sorry the path "{this.props.location.pathname}" you have taken doesn&#39;t exist.
                Redirecting to home in {this.state.timeRemain}
            </div>
        );
    }
}

export default (
    <Route path="/" components={App}>
        <IndexRoute component={HomePage} />
        <Route path="search" components={SearchPage} />
        <Route path="channel" component={ChannelPage} />
        <Route path="calendar" component={CalendarPage} />
        <Route path="*" component={DefaultFallback} />
    </Route>
);
