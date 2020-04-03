import React from 'react';

//Componentes auxiliares:
import Card from './Card';
import { Row } from 'reactstrap';

let cardsByRow = 6;
let cardsByColumn = 5;

// "https://deckofcardsapi.com/static/img/QS.png"

let CardsTable = (props) => {

    let topPadding = 15;
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

    return (
        <div style={{ padding: topPadding, height: "100vh" }}>
            {getCardsDeckRendered(props, cardsDeck)}
        </div>
    );
}

let getCardsRowRendered = (props, cardsDeck) => {
    return (
        cardsDeck.map((card, i) => {
            return (
                <Card xIndex={card.xIndex} yIndex={card.yIndex} imageURL={card.imageURL}
                    key={"card." + card.xIndex + "." + card.yIndex + "." + (new Date()).getSeconds()} />
            );
        })
    );
}

let getCardsDeckRendered = (props, cardsDeck) => {

    let cardsRowsRendered = [];
    let cardsDeckAsMatrix = transformCardsDeckInMatrix(cardsDeck);

    for (let i = 0; i < cardsDeckAsMatrix.length && i < cardsByColumn; i++) {

        let cardsForThisRow = [];

        for (let k = 0; k < cardsDeckAsMatrix[i].length; k++) {
            cardsDeckAsMatrix[i][k].xIndex = i;
            cardsDeckAsMatrix[i][k].yIndex = k;
            cardsForThisRow.push(cardsDeckAsMatrix[i][k]);
        }

        cardsRowsRendered.push(
            <Row style={{ padding: 5, height: "20%" }}
                key={"rowOfCards." + i + "." + (new Date()).getSeconds()}>
                {getCardsRowRendered(props, cardsForThisRow)}
            </Row>
        );
    }

    return cardsRowsRendered;
}

let transformCardsDeckInMatrix = (cardsDeck) => {
    let setOfRows = [];

    let columnsAccounter = 0;
    let setOfTemporalCells = [];

    for (let i = 0; i < cardsDeck.length; i++) {
        columnsAccounter++;
        setOfTemporalCells.push(cardsDeck[i]);

        if (columnsAccounter >= cardsByRow) {
            setOfRows.push(setOfTemporalCells);
            columnsAccounter = 0; setOfTemporalCells = [];
        }
    }

    return setOfRows;
}

export default CardsTable;