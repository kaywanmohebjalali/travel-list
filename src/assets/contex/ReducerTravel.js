import { SET_TRAVEL } from "./actionTravelType";
const intialState = {
    travel: []
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_TRAVEL:
            localStorage.setItem('travel', JSON.stringify({ ...state, travel: action.payload }))
            return { ...state, travel: action.payload }

        default:
            return state;
    }
}

export { reducer, intialState }