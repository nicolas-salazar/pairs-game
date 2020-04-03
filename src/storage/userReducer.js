const initialState = {
    userName: "Nicolás"
}

const reducer = (state = initialState, action) => {

    if (action.type === 'changeUserName') {
        return {
            ...state,
            userName: action.newUserName
        }
    }

    return state;
}

export default reducer;