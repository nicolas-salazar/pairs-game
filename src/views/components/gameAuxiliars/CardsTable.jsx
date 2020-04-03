import React from 'react';

//Componentes auxiliares:
import Card from './Card';
import { Row } from 'reactstrap';

let cardsInYAxis = 5;
let cardsInXAxis = 5;

let CardsTable = (props) => {

    let topPadding = 15;
    let cardSize = 0;

    return (
        <div style={{ padding: topPadding, height: "100vh" }}>

            <Row style={{ padding: 5, height: "20%", verticalAlign: "middle" }}>
                <Card xIndex={0} yIndex={0} cardSize={cardSize} />
                <Card xIndex={1} yIndex={0} cardSize={cardSize} />
                <Card xIndex={2} yIndex={0} cardSize={cardSize} />
                <Card xIndex={3} yIndex={0} cardSize={cardSize} />
                <Card xIndex={4} yIndex={0} cardSize={cardSize} />
                <Card xIndex={5} yIndex={0} cardSize={cardSize} />
            </Row>

            <Row style={{padding:5, height: "20%"}}>
                <Card xIndex={0} yIndex={1} cardSize={cardSize} />
                <Card xIndex={1} yIndex={1} cardSize={cardSize} />
                <Card xIndex={2} yIndex={1} cardSize={cardSize} />
                <Card xIndex={3} yIndex={1} cardSize={cardSize} />
                <Card xIndex={4} yIndex={1} cardSize={cardSize} />
                <Card xIndex={5} yIndex={1} cardSize={cardSize} />
            </Row>

            <Row style={{padding:5, height: "20%"}}>
                <Card xIndex={0} yIndex={2} cardSize={cardSize} />
                <Card xIndex={1} yIndex={2} cardSize={cardSize} />
                <Card xIndex={2} yIndex={2} cardSize={cardSize} />
                <Card xIndex={3} yIndex={2} cardSize={cardSize} />
                <Card xIndex={4} yIndex={2} cardSize={cardSize} />
                <Card xIndex={5} yIndex={2} cardSize={cardSize} />
            </Row>

            <Row style={{padding:5, height: "20%"}}>
                <Card xIndex={0} yIndex={3} cardSize={cardSize} />
                <Card xIndex={1} yIndex={3} cardSize={cardSize} />
                <Card xIndex={2} yIndex={3} cardSize={cardSize} />
                <Card xIndex={3} yIndex={3} cardSize={cardSize} />
                <Card xIndex={4} yIndex={3} cardSize={cardSize} />
                <Card xIndex={5} yIndex={3} cardSize={cardSize} />
            </Row>

            <Row style={{padding:5, height: "20%"}}>
                <Card xIndex={0} yIndex={4} cardSize={cardSize} />
                <Card xIndex={1} yIndex={4} cardSize={cardSize} />
                <Card xIndex={2} yIndex={4} cardSize={cardSize} />
                <Card xIndex={3} yIndex={4} cardSize={cardSize} />
                <Card xIndex={4} yIndex={4} cardSize={cardSize} />
                <Card xIndex={5} yIndex={4} cardSize={cardSize} />
            </Row>
        </div>
    );
}

export default CardsTable;