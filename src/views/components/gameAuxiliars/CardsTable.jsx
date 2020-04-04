import React from 'react';

import { Row } from 'reactstrap';
import { connect } from "react-redux";

//Componentes auxiliares:
import Card from './Card';

//Constantes auxiliares:
let cardsByRow = 6;
let cardsByColumn = 5;
let pointsWhenFailing = 10;
let pointsWhenPairing = 500;
let pairsFoundForWinning = 15;

//Constantes para fines de desarrollo:
let showTableViaConsole = false;
let showCardsForDevelopment = false;

class CardsTable extends React.Component {
    
    constructor() {
        super();

        this.state = {
            pairsFound: 0,
            cardsDeck: [],
            onClickWorks: true,
            shouldAnimateCards: true,
            activeTry: {code: undefined,index: undefined}
        }
    }

    render() {
        return (
            <div style={{ padding: 15, height: "100vh" }}>
                {this.getCardsDeckRendered(this.state.cardsDeck || [])}
            </div>
        );
    }

    componentDidMount(){
        this.setState({ cardsDeck: this.props.cardsDeck || []});
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
                    <Card {...card} onClick={this.fireTry}
                        animate={this.state.shouldAnimateCards} onClickWorks={this.state.onClickWorks}
                        key={"card." + card.xIndex + "." + card.yIndex + "." + (new Date()).getSeconds()} />
                );
            })
        );
    }

    //Métodos operativos:
    fireActionsWhenFailing = (targetCard) => {
        let newCardsDeck = [...this.state.cardsDeck];
        newCardsDeck[targetCard.originalIndex].showCard = true;

        this.setState({
            onClickWorks: false,
            cardsDeck: newCardsDeck,
            activeTry: { index: undefined, code: undefined },
        });

        this.setHiddenOnAllCardsAfterTimeout();
        this.props.updateGameScore(this.props.gameScore - pointsWhenFailing);
    }
    
    fireActionsWhenScoring = (targetCard) => {
        
        let previousPairsFound = this.state.pairsFound;
        
        this.setState({
            pairsFound: previousPairsFound + 1,
            activeTry: { index: undefined, code: undefined },
            cardsDeck: this.setFoundOnTargetCard(this.state.cardsDeck, targetCard.code)
        });

        this.props.updateGameScore(this.props.gameScore + pointsWhenPairing);
        
        if (previousPairsFound + 1 === pairsFoundForWinning) {this.props.setGameOver();}
    }

    fireTry = (e,targetCard) => {
        if (this.state.activeTry.index === undefined) {
            let newActiveTry = { index: targetCard.originalIndex, code: targetCard.code }
            
            let newCardsDeck = [...this.state.cardsDeck];
            newCardsDeck[targetCard.originalIndex].showCard = true;

            if (showTableViaConsole) console.table(newCardsDeck);

            this.setState({
                cardsDeck: newCardsDeck,
                activeTry: newActiveTry, 
                shouldAnimateCards: false
            });
        }

        if(this.state.activeTry.index !== undefined){
            if (this.state.activeTry.code === targetCard.code) {
                this.fireActionsWhenScoring(targetCard);
            }
            else {
                this.fireActionsWhenFailing(targetCard);
            }
        }
    }

    setHiddenOnAllCardsAfterTimeout = (timeout = 1000) => {
        setTimeout(() => {
            let myCardsDeck = [...this.state.cardsDeck];
            for (let i = 0; i < myCardsDeck.length; i++) { myCardsDeck[i].showCard = false; }
            this.setState({ cardsDeck: myCardsDeck, onClickWorks: true });
        }, timeout);
    }

    setFoundOnTargetCard = (cardsDeck, targetCode) => {
        let myCardsDesk = [...cardsDeck];

        for (let i = 0; i < myCardsDesk.length; i++) {
            if (myCardsDesk[i].code === targetCode) {
                myCardsDesk[i].found = true;
            }
        }

        return myCardsDesk;
    }

    transformCardsDeckInMatrix = (cardsDeck) => {
        let setOfRows = [];

        let columnsAccounter = 0;
        let setOfTemporalCells = [];

        for (let i = 0; i < cardsDeck.length; i++) {
            columnsAccounter++;
            setOfTemporalCells.push({
                ...cardsDeck[i],
                originalIndex: i,
                showCard: showCardsForDevelopment || cardsDeck[i].showCard
            });

            if (columnsAccounter >= cardsByRow) {
                setOfRows.push(setOfTemporalCells);
                columnsAccounter = 0; setOfTemporalCells = [];
            }
        }

        return setOfRows;
    }
}

const mapDispachToProps = dispach => {
    return {
        setGameOver: () => dispach({ type: "setGameOver" }),
        updateGameScore: (newGameScore) => dispach({ type: "updateGameScore", newGameScore: newGameScore })
    };
};

const mapStateToProps = state => {
    return {
        gameScore: state.userReducer.gameScore
    };
};

export default connect(mapStateToProps, mapDispachToProps)(CardsTable);