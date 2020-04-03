import React from 'react';

//Componentes auxiliares:
import CardsTable from './gameAuxiliars/CardsTable';

class GameBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            cardsList: []
        }
    }

    render() {
        return (
            <CardsTable />
        );
    }

    //Métodos de renderizado:

    //Métodos operativos:
    getRandomCardsFromApi = () => {

    }

}

export default GameBoard;