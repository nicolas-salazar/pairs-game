import React from 'react';

import { connect } from "react-redux";

let UserFinalScore = (props) => {
    return (
        <React.Fragment>
            <h1><b>¡Has ganado!</b></h1>
            <h5 style={{ marginTop: "15vh" }}>Tu score:</h5>
            <h1><b>{getFinalScore(props)}</b></h1>

            <h6 style={{ marginTop: "3vh" }}>
                {"Tardaste " + Math.round(getSpentTimeInSeconds(props.gameStartDate)) + " segundos"}
            </h6>
        </React.Fragment>
    );
}

let getFinalScore = (props) => {
    let totalScore = props.gameScore;
    let timeSpentInSeconds = getSpentTimeInSeconds(props.gameStartDate);

    return (Math.round(totalScore * getScoreMultiplierViaMathFunction(timeSpentInSeconds)));
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