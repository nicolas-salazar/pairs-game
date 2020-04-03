import React from 'react';

import { connect } from "react-redux";

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
        this.getTopScoresFromFirestore();
    }

    render() {
        return (
            <div style={{ paddingTop: 15 }}>
                <h4>Top <b>Scores</b></h4>
                {this.getTopScoreRowsBasedOnState()}
            </div>
        );
    }

    //Métodos para renderizado:
    getTopScoreRowsBasedOnState = () => {
        if (this.props.allowFirestoreReads) {
            return this.state.downloadedTopScores.map((topScore, i) => {
                return (
                    <TopScoreRow key={"topScore." + i + "." + (new Date()).getSeconds}
                        userName={topScore.userName} gameScore={topScore.gameScore} />
                );
            });
        }
    }

    //Métodos operativos:
    getTopScoresFromFirestore = () => {
        firestoreDB.collection("userScores").orderBy("gameScore", "desc").limit(5).get()
            .then(snapshots => {
                let downloadedTopScores = [];
                snapshots.forEach(userScore => downloadedTopScores.push(userScore.data()));

                // console.table(downloadedTopScores);
                this.setState({ downloadedTopScores: downloadedTopScores });
            })
            .catch(error => { console.log(error); });
    }
}

const mapStateToProps = state => {
    return {
        allowFirestoreReads: state.developmentReducer.allowFirestoreReads,
    };
};

export default connect(mapStateToProps)(TopScorePanel);