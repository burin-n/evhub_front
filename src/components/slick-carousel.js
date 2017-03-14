import React, { Component } from 'react';
import EventDetail from '../containers/eventDetail';

export default class SlickCarousel extends Component {
    constructor(props) {
        super(props);
        //Require imageList property
        // console.log(this.props.imageList);

        this.state = {
            'isClicked': false,
            'maskedDOM': null
        };

        this.loadRequirement();

        this.handleClick = this.handleClick.bind(this);
        this.handleExit = this.handleExit.bind(this);

    }

    loadRequirement() {

        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "./resource/slick-carousel/slick/slick.min.js";
        js.id = "slickJS";
        js.onload = () => {
            $(".slider-top").slick({
              centerMode: true,
              variableWidth: true,
              infinite: true,
              focusOnSelect: true,
              centerPadding: '60px',
              slidesToShow: 3,
              dots: true,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              responsive: [{
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              }, {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }]
            });
        }

        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './resource/slick-carousel/slick/slick.css';
        link.media = 'all';

        var link2 = document.createElement('link');
        link2.rel  = 'stylesheet';
        link2.type = 'text/css';
        link2.href = './resource/slick-carousel/slick/slick-theme.css';
        link2.media = 'all';

        head.appendChild(link);
        head.appendChild(link2);
        head.appendChild(js);


    }

    handleClick(data) {
        this.setState({'isClicked': true, 'maskedDOM': <EventDetail eventData={data} onExit={this.handleExit} />});
    }

    handleExit() {
        this.setState({'isClicked': false, 'maskedDOM': <div></div>});
    }

    render() {
        var index = 0;

        const carousel_item_slick = this.props.imageList.map((item, index) => {
            var name = "carousel" + index;

            return (
                <div key={name} onClick={() => this.handleClick(item)}>
                    <div className="slide-inner">
                        <a>
                            <img src={item.url} />
                            <p className="carousel-description">
                                <span className="text-large text-bold">{item.header}</span><br />
                                {item.description}
                            </p>
                        </a>
                    </div>
                </div>
            );
        });

        var eventDetail = this.state.maskedDOM;

        return (

            <div>
                <div className="mask-all-container">
                    {eventDetail}
                </div>
                <section id="slick-content">
                    <div className="slider-super-container">
                        <div className="slider-container">
                            <div className="slider-top">
                                {carousel_item_slick}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
