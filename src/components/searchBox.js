import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SearchBox extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = { 'searchTerm': '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onQuerySubmit = this.onQuerySubmit.bind(this);

    }

    onInputChange(event) {
        this.setState({'searchTerm': event.target.value});
    }

    onQuerySubmit(event) {
        event.preventDefault();
        if(this.state.searchTerm != '') {
            var search = this.state.searchTerm;
            this.setState({'searchTerm': ''});

            this.context.router.push(`/search?term=${search}`);
        }
    }

    componentWillReceiveProps(props) {
        if(!props.isShown) this.setState({'searchTerm': ''});
    }

    render() {

        var additionalClassName = this.props.addClass;
        var totalClassName = (this.props.addClass) ? "search-box " + additionalClassName: "search-box";
        var useBottom = (this.props.isUseBottom) ? "bottom" : "";
        totalClassName = (this.props.isUseBottom) ? (totalClassName) : (totalClassName + " search-box-alt");
        var addJSX = (this.props.addJSX) ? this.props.addJSX : <div></div>;

        return (
            <div className={totalClassName} id="searchBox">
                <div className="top">
                    <div className="search-text">
                        <form onSubmit={this.onQuerySubmit} >
                            <input className="no-glow search-inner-box" placeholder="Search" type="text" maxLength="100" id="searchInput" onChange={this.onInputChange} value={this.state.searchTerm}></input>
                            <div className="button-search-container">
                                <button type="submit" className="btn button-search-text"><span className="glyphicon glyphicon-search"></span></button>
                            </div>
                        </form>
                        <div className={(this.props.isUseBottom) ? "sub-text-container": "hidden-display"}>
                            <p className="sub-text">Search for events and channels
                                <br />
                                <span className="text-small">
                                    or&nbsp;
                                    <Link to="/search" className="no-text-decoration" >Advanced search<span className="glyphicon glyphicon-menu-right"></span></Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={useBottom}></div>
            </div>
        );
    }
}
