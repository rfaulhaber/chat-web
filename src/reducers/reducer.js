import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../actions/MessageActions';
import { CONNECT } from '../actions/IOActions';

const initialState = {
    messages: []
};

export default function app(state = initialState, action) {
    console.log('action', action);
    switch(action.type) {
        case CONNECT:
            return Object.assign({}, state, {
                serverURL: action.url,
                io: action.io
            });
        case RECEIVE_MESSAGE:
        case SEND_MESSAGE:
            return Object.assign({}, state, {
                messages: state.messages.concat(action.message)
            });
        default:
            return state;
    }
}