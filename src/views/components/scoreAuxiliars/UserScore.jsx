import React from 'react';

import { connect } from "react-redux";

let UserScore = (props) => {
    return (
        <React.Fragment>
            <h1>¡Has ganado!</h1>
            <h5>Score</h5>
            <h1>{props.gameScore}</h1>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        userName: state.userReducer.userName,
        gameScore: state.userReducer.gameScore,
    };
};

export default connect(mapStateToProps)(UserScore);