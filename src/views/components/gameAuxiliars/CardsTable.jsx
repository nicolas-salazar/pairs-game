import React from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

//Componentes auxiliares:
import Card from './Card';

let verticalCards = 5;
let horizontalCards = 5;

let CardsTable = (props) => {

    let topPadding = 15;
    let avaliableWidth = window.innerWidth;
    let avaliableHeight = window.innerHeight - topPadding;
    if (avaliableWidth >= 770) avaliableWidth = Math.round((avaliableWidth * 8 / 12) - 30);
    let cardSize = { width: avaliableWidth / horizontalCards, height: avaliableHeight / verticalCards };

    return (
        <div style={{ padding: topPadding, paddingLeft: 0 }}>
            <PerfectScrollbar style={{ maxHeight: avaliableHeight }}>
                <Card xIndex={0} yIndex={0} cardSize={cardSize} />
                <Card xIndex={1} yIndex={0} cardSize={cardSize} />
                <Card xIndex={2} yIndex={0} cardSize={cardSize} />
                <Card xIndex={3} yIndex={0} cardSize={cardSize} />
                <Card xIndex={4} yIndex={0} cardSize={cardSize} />

                <Card xIndex={0} yIndex={1} cardSize={cardSize} />
                <Card xIndex={1} yIndex={1} cardSize={cardSize} />
                <Card xIndex={2} yIndex={1} cardSize={cardSize} />
                <Card xIndex={3} yIndex={1} cardSize={cardSize} />
                <Card xIndex={4} yIndex={1} cardSize={cardSize} />

                <Card xIndex={0} yIndex={2} cardSize={cardSize} />
                <Card xIndex={1} yIndex={2} cardSize={cardSize} />
                <Card xIndex={2} yIndex={2} cardSize={cardSize} />
                <Card xIndex={3} yIndex={2} cardSize={cardSize} />
                <Card xIndex={4} yIndex={2} cardSize={cardSize} />

                <Card xIndex={0} yIndex={3} cardSize={cardSize} />
                <Card xIndex={1} yIndex={3} cardSize={cardSize} />
                <Card xIndex={2} yIndex={3} cardSize={cardSize} />
                <Card xIndex={3} yIndex={3} cardSize={cardSize} />
                <Card xIndex={4} yIndex={3} cardSize={cardSize} />
            </PerfectScrollbar>
        </div>
    );
}

export default CardsTable;