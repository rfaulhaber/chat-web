import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../actions/MessageActions';

const initialState = {
    messages: []
};

export default function app(state = initialState, action) {
    console.log('action', action);
    switch(action.type) {
        case RECEIVE_MESSAGE:
        case SEND_MESSAGE:
            return Object.assign({}, state, {
                messages: state.messages.concat(action.message)
            });
        default:
            return state;
    }
}