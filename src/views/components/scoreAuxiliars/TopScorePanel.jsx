import React from 'react';

//Utilidad de base de datos:
import { firestoreDB } from '../../../firebase';

//Componentes auxiliares:
import TopScoreRow from './TopScoreRow';

class TopScorePanel extends React.Component {

    constructor() {
        super();

        this.state = {
            downloadedTopScores: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={{ paddingTop: 15 }}>
                <h4>Top <b>Score</b></h4>
                <TopScoreRow userName="the Salazar" gameScore={5000} />
                <TopScoreRow userName="iromeolover" gameScore={15000} />
                <TopScoreRow userName="the Salazar" gameScore={12500} />
                <TopScoreRow userName="the Salazar" gameScore={1200} />
                <TopScoreRow userName="the Salazar" gameScore={1000} />
            </div>
        );
    }

    //Métodos para renderizado:

    //Métodos operativos:
    getTopScoresFromFirestore = () => {

    }
}

export default TopScorePanel;