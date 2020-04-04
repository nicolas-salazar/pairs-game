import React from 'react';

import { connect } from "react-redux";

//Componentes auxiliares:
import CardsTable from './gameAuxiliars/CardsTable';

//Scripts auxiliares:
import { shuffleList } from '../../tools/scripts/arraysManagement';

class GameBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            cardsDeck: [],
            cardsHasBeenDownloaded: false
        }
    }

    componentDidMount() {
        // let cardsDeck = [];
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        // this.setState({ cardsDeck: cardsDeck });

        this.setCardsDeckFromApi();
    }

    render() {
        if (this.state.cardsHasBeenDownloaded) {
            return (<CardsTable cardsDeck={this.state.cardsDeck} />);
        }
        else {
            return (<React.Fragment />);
        }
    }

    //Métodos de renderizado:

    //Métodos operativos:
    getCardsContainerFromApi = () => {
        return (
            new Promise((resolve, reject) => {
                fetch(this.props.cardsApiHost + "/deck/new/shuffle/?deck_count=1")
                    .then(serverResponse => {
                        switch (serverResponse.status) {
                            case 200:
                                serverResponse.json().then(cardsDeck => {
                                    resolve({ id: cardsDeck.deck_id });
                                });
                                break;

                            default:
                                resolve({ id: "2g11umjx80ch" });
                                break;
                        }
                    });
            })
        );
    }

    getRandomCardsFromApi = (containerId) => {
        return (
            new Promise((resolve, reject) => {
                let wantedCards = 15;

                fetch(this.props.cardsApiHost + "/deck/" + containerId + "/draw/?count=" + wantedCards)
                    .then(serverResponse => {
                        switch (serverResponse.status) {
                            case 200:
                                serverResponse.json().then(response => {
                                    let customCardsDeck = response.cards.map(card => {
                                        return ({
                                            code: card.code,
                                            imageURL: card.image
                                        });
                                    });

                                    customCardsDeck.push(...customCardsDeck)

                                    resolve(customCardsDeck);
                                });
                                break;

                            default:
                                resolve([]);
                                break;

                        }
                    })
            })
        );
    }

    setCardsDeckFromApi = () => {
        this.getCardsContainerFromApi()
            .then(cardsContainer => {
                this.getRandomCardsFromApi(cardsContainer.id)
                    .then(cardsDeck => {
                        this.setState({
                            cardsHasBeenDownloaded: true,
                            cardsDeck: shuffleList(cardsDeck)
                        });
                    });
            });
    }

}

const mapStateToProps = state => {
    return {
        cardsApiHost: state.backendReducer.cardsApiHost,
    };
};

export default connect(mapStateToProps)(GameBoard);