import { HANDLESIGN_UP } from '../actions';

const initialState = {
    registrationStatus: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLESIGN_UP:
            return action.payload
        default:
            return state;
    }
}