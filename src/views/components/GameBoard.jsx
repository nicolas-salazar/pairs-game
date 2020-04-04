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
                                    let customCardsDeck = response.cards.map((card,i) => {
                                        return ({
                                            code: card.code,
                                            showCard: false,
                                            imageURL: card.image
                                        });
                                    });

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
                        let sortedCardsDeck = cardsDeck;
                        sortedCardsDeck.push(...sortedCardsDeck);
                        sortedCardsDeck = shuffleList(sortedCardsDeck);

                        let definitiveCardsDeck=[];
                        for (let i = 0; i < sortedCardsDeck.length; i++) {
                            let newCardDeck = { ...sortedCardsDeck[i], originalIndex: i };
                            definitiveCardsDeck.push(newCardDeck);
                        }

                        console.log(definitiveCardsDeck);

                        this.setState({
                            cardsHasBeenDownloaded: true,
                            cardsDeck: definitiveCardsDeck
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