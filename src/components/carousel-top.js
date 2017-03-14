import React, { Component } from 'react';
import SlickCarousel from './slick-carousel';
import BootstrapCarousel from './bootstrap-carousel';

export default class CarouselTop extends Component {
    constructor(props) {
        super(props);
        this.state = {'width': $(window).width()};
        this.handleResize = this.handleResize.bind(this);
        //Require imageList property
    }

    handleResize() {
        if((this.state.width <= 768 && $(window).width() > 768) || (this.state.width > 768 && $(window).width() <= 768)) {
            this.setState({'width': $(window).width()});

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
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillMount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        var renderedObject = <div></div>;
        console.log(this.state.width);
        if(this.state.width >= 768) {
            renderedObject = <SlickCarousel imageList={this.props.imageList} />;
        } else {
            renderedObject = <BootstrapCarousel imageList={this.props.imageList} />;
        }

        return renderedObject;
    }
}
