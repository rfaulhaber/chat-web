import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../actions/MessageActions';
import {AUTHENTICATE, RECEIVE_ID} from '../actions/AuthActions';

const initialState = {
    messages: [],
    isUserAuthenticated: false,
    serverID: null
};

export default function app(state = initialState, action) {
    console.log('action', action);
    switch(action.type) {
        case RECEIVE_MESSAGE:
        case SEND_MESSAGE:
            return Object.assign({}, state, {
                messages: state.messages.concat(action.message)
            });
        case AUTHENTICATE:
            return Object.assign({}, state, {
                isUserAuthenticated: true,
                userID: action.userID || state.serverID
            });
        case RECEIVE_ID:
            return Object.assign({}, state, {
                serverID: action.serverID
            });
        default:
            return state;
    }
}