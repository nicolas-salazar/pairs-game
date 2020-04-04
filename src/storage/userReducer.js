const initialState = {
    gameScore: 500,
    userName: "Nicolás",
    theGameIsOver: false,
    gameStartDate: new Date()
}

const reducer = (state = initialState, action) => {

    if (action.type === 'changeUserName') {
        return {
            ...state,
            userName: action.newUserName,
        }
    }

    if (action.type === 'updateGameScore') {
        let newGameScore = action.newGameScore;
        if (newGameScore < 0) newGameScore = 0;

        return {
            ...state,
            gameScore: newGameScore,
        }
    }

    if (action.type === 'setGameOver') {
        console.log('Game over');
        return {
            ...state,
            theGameIsOver: true,
        }
    }

    return state;
}

export default reducer;