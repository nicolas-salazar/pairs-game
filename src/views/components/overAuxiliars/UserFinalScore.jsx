import React from 'react';

import { connect } from "react-redux";

//Componentes auxiliares:
import ScoreSenderForm from './ScoreSenderForm';

let UserFinalScore = (props) => {

    let finalScore = getFinalScore(props);

    return (
        <React.Fragment>
            <h1><b>¡Has ganado!</b></h1>
            <h5 style={{ marginTop: "15vh" }}>Tu score:</h5>
            <h1><b>{finalScore}</b></h1>

            <h6 style={{ marginTop: "3vh" }}>
                {"Tardaste " + Math.round(getSpentTimeInSeconds(props.gameStartDate)) + " segundos"}
            </h6>

            <ScoreSenderForm finalScore={finalScore} />
        </React.Fragment>
    );
}

let getFinalScore = (props) => {
    try {
        let totalScore = props.gameScore;
        let timeSpentInSeconds = getSpentTimeInSeconds(props.gameStartDate);

        return (Math.round(totalScore * getScoreMultiplierViaMathFunction(timeSpentInSeconds)));
    }
    catch (error) { return 10 }
}

let getScoreMultiplierViaMathFunction = (timeSpentInSeconds) => {
    let scoreMultiplier = 10 * (1 / (timeSpentInSeconds / 50));
    return (scoreMultiplier);
}

let getSpentTimeInSeconds = (gameStartDate) => {
    return (((new Date()) - (gameStartDate)) / 1000);
}

const mapStateToProps = state => {
    return {
        gameScore: state.userReducer.gameScore,
        gameStartDate: state.userReducer.gameStartDate,
    };
};

export default connect(mapStateToProps)(UserFinalScore);