import React, { Component } from 'react';
import CardListItem from './cardItem';

let height = 0;
let paddingOffset = 20;

class cardList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var allCards = document.getElementsByClassName("cards");
        var allMasks = document.getElementsByClassName("mask");
        var allMasksContainer = document.getElementsByClassName("mask-container");


        var width = 0;
        var minHeight = allCards[0].offsetHeight;
        for(var i = allCards.length -1; i >= 0; i--) {
            if(height < allCards[i].offsetHeight) height = allCards[i].offsetHeight;
            if(width < allCards[i].offsetWidth) width = allCards[i].offsetWidth;
            if(minHeight > allCards[i].offsetHeight) minHeight = allCards[i].offsetHeight;
        }

        var allCardsLine = document.getElementsByClassName("cards-line-container");
        for(var i = allCardsLine.length-1; i >= 0; i--) {
            allCardsLine[i].style.height = (height + 15 + paddingOffset) + "px";
        }

        for(var i = allMasks.length -1; i >= 0; i--) {
            allMasks[i].style.height = height + "px";
            allMasksContainer[i].style.top = "-" + (height + allCards[i].offsetHeight - height) + "px";
            if(allCards[i].offsetHeight - height != 0) allCards[i].style.height = height + "px";
        }
    }

    componentDidUpdate(nextProps) {

        var allCardsLine = document.getElementsByClassName("cards-line-container");
        for(var i = allCardsLine.length-1; i >= 0; i--) {
            allCardsLine[i].style.height = (height + 15 + paddingOffset) + "px";
        }

        var allCardsContainer = document.getElementsByClassName("cards-container");
        for(var i = allCardsContainer.length-1; i >= 0; i--) {
            allCardsContainer[i].style.height = "100%";
        }

        var allMasks = document.getElementsByClassName("mask");
        var allMasksContainer = document.getElementsByClassName("mask-container");
        var allCards = document.getElementsByClassName("cards");

        for(var i = allMasks.length -1; i >= 0; i--) {
            allMasks[i].style.height = height + "px";
            allMasksContainer[i].style.top = "-" + (height + allCards[i].offsetHeight - height) + "px";
            if(allCards[i].offsetHeight - height != 0) allCards[i].style.height = height + "px";
        }
    }

    render() {
        var setClassName = (this.props.isLine) ? "cards-line-container text-center" : "cards-container text-center";
        setClassName = (this.props.isLeft) ? setClassName + " text-left" : setClassName;
        const myCardList = this.props.cards.map((card) => {
            return <CardListItem card={card} key={card.id} />
        });

        return (
            <div className={setClassName}>
                {myCardList}
            </div>
        );
    }
}

export default cardList;
