import React from 'react';

import { Row } from 'reactstrap';

//Componentes auxiliares:
import Card from './Card';

let cardsByRow = 6;
let cardsByColumn = 5;

let CardsTable = (props) => {

    let topPadding = 15;

    return (
        <div style={{ padding: topPadding, height: "100vh" }}>
            {getCardsDeckRendered(props.cardsDeck || [], props)}
        </div>
    );
}

let getCardsRowRendered = (cardsDeck, props) => {
    return (
        cardsDeck.map((card, i) => {
            return (
                <Card xIndex={card.xIndex} yIndex={card.yIndex} imageURL={card.imageURL}
                    key={"card." + card.xIndex + "." + card.yIndex + "." + (new Date()).getSeconds()} />
            );
        })
    );
}

let getCardsDeckRendered = (cardsDeck, props) => {

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
                {getCardsRowRendered(cardsForThisRow, props)}
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