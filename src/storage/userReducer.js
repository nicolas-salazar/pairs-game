const initialState = {
    gameScore: 500,
    userName: "Nicolás",
    theGameIsOver: false
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
        return {
            ...state,
            theGameIsOver: action.theGameIsOver,
        }
    }

    return state;
}

export default reducer;