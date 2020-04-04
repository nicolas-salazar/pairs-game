import React from 'react';

import { Row } from 'reactstrap';

//Componentes auxiliares:
import Card from './Card';

let cardsByRow = 6;
let cardsByColumn = 5;

class CardsTable extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ padding: 15, height: "100vh" }}>
                {this.getCardsDeckRendered(this.props.cardsDeck || [])}
            </div>
        );
    }

    //Métodos de renderizado:
    getCardsDeckRendered = (cardsDeck) => {

        let cardsRowsRendered = [];
        let cardsDeckAsMatrix = this.transformCardsDeckInMatrix(cardsDeck);

        for (let i = 0; i < cardsDeckAsMatrix.length && i < cardsByColumn; i++) {

            let cardsForThisRow = [];

            for (let k = 0; k < cardsDeckAsMatrix[i].length; k++) {
                let targetCard = {
                    xIndex: i,
                    yIndex: k,
                    ...cardsDeckAsMatrix[i][k]
                };

                cardsForThisRow.push(targetCard);
            }

            cardsRowsRendered.push(
                <Row style={{ padding: 5, height: "20%" }}
                    key={"rowOfCards." + i + "." + (new Date()).getSeconds()}>
                    {this.getCardsRowRendered(cardsForThisRow)}
                </Row>
            );
        }

        return cardsRowsRendered;
    }

    getCardsRowRendered = (cardsDeck) => {
        return (
            cardsDeck.map((card, i) => {
                return (
                    <Card xIndex={card.xIndex} yIndex={card.yIndex} imageURL={card.imageURL}
                        key={"card." + card.xIndex + "." + card.yIndex + "." + (new Date()).getSeconds()} />
                );
            })
        );
    }

    //Métodos operativos:
    transformCardsDeckInMatrix = (cardsDeck) => {
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
}


export default CardsTable;