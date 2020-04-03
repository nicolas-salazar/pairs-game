const initialState = {
    gameScore: 0,
    userName: "Nicolás",
}

const reducer = (state = initialState, action) => {

    if (action.type === 'changeUserName') {
        return {
            ...state,
            userName: action.newUserName,
        }
    }

    if (action.type === 'updateGameScore') {
        return {
            ...state,
            gameScore: action.gameScore,
        }
    }

    return state;
}

export default reducer;