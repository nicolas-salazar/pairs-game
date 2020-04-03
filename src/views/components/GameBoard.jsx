import React from 'react';

//Componentes auxiliares:
import CardsTable from './gameAuxiliars/CardsTable';

class GameBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            cardsDeck: []
        }
    }

    componentDidMount() {
        let cardsDeck = [];

        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });
        cardsDeck.push({ imageURL: "https://deckofcardsapi.com/static/img/QS.png" });

        this.setState({cardsDeck: cardsDeck});
    }

    render() {
        return (
            <CardsTable cardsDeck={this.state.cardsDeck} />
        );
    }

    //Métodos de renderizado:

    //Métodos operativos:
    getRandomCardsFromApi = () => {

    }

}

export default GameBoard;