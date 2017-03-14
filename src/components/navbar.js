import React, { Component } from 'react';
import SearchBox from './searchBox';
import { Link } from 'react-router';

export default class TopNavBar extends Component {

    constructor(props) {
        super(props);
        //Require page property
        this.state = {'isSearchBoxShown': false};
        this.handleSearchButton = this.handleSearchButton.bind(this);
        this.toggleSearchButtonState = this.toggleSearchButtonState.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnMenuClick = this.handleOnMenuClick.bind(this);

        $(document).keyup(
            (e) => {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
                if(this.state.isSearchBoxShown) this.toggleSearchButtonState();
            }
        }).bind(this);
    }

    toggleSearchButtonState() {
        this.setState({'isSearchBoxShown': !this.state.isSearchBoxShown});
    }

    handleSearchButton() {
        if(!this.state.isSearchBoxShown) {
            return <SearchBox addClass="hidden-display" isUseBottom={true} isShown={this.state.isSearchBoxShown} />;
        }
        return <SearchBox isUseBottom={true} isShown={this.state.isSearchBoxShown} />;
    }

    handleOnClick() {
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    }

    handleOnMenuClick() {
        if($("#searchBox").css('display') !='none') {
            $("#searchBox").addClass("hidden-display");
        }
        this.setState({'isSearchBoxShown': false});
    }

    render() {

        const classForCalendar = (this.props.page == "calendar") ? "active navbar-selected" : "";
        const liForSearch = (this.props.page == "search") ? (<li className="active navbar-selected"><a onClick={this.handleOnClick}><span className="glyphicon glyphicon-search icon-text" aria-hidden="true"></span>Search</a></li>) : (<li onClick={this.toggleSearchButtonState} ><a onClick={this.handleOnClick}><span className="glyphicon glyphicon-search icon-text" aria-hidden="true"></span>Search</a></li>);
        let classForHome = "";

        if(classForCalendar == "" && this.props.page != "search" && this.props.page != "channel") {
            classForHome = "active navbar-selected";
        }

        var rightNav = (
            <ul className="nav navbar-nav">
                <li className={classForHome}>
                    <Link to="/" onClick={this.handleOnClick}>
                        <span className="glyphicon glyphicon-home icon-text" aria-hidden="true"></span>Home
                    </Link>
                </li>
                <li className={classForCalendar}>
                    <Link to="/calendar" onClick={this.handleOnClick}>
                        <span className="glyphicon glyphicon-calendar icon-text" aria-hidden="true"></span>Calendar
                    </Link>
                </li>
                {liForSearch}
            </ul>
        );

        var searchBox = this.handleSearchButton();

        return (
            <nav className="navbar navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                    {searchBox}
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" onClick={this.handleOnMenuClick}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand" href="#">
                      <img src="./resource/img/EVHmini.png" style={{height: '40px'}} />
                  </Link>
                </div>
                <div id="navbar" className="navbar-collapse navbar-right collapse">
                    {rightNav}
                </div>
              </div>
            </nav>
        );
    }
}
