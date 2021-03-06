import io from 'socket.io-client';
import { SEND_MESSAGE, receiveMessage } from '../actions/MessageActions';
import { AUTHENTICATE, receiveID } from '../actions/AuthActions';

let socket = null;

const socketMiddleware = store => next => (action) => {
    const state = store.getState();
    if (action.type === SEND_MESSAGE) {
        console.log('emitting chat');
        const message = Object.assign({}, action.message, { 
            from: state.serverID,
            alias: state.userID
        });
        action.message = message;
        socket.emit('chat message', message);
    } else if (action.type === AUTHENTICATE && action.userID && action.password) {
        console.log('saving id');
        socket.emit('saveID', {
            userID: action.userID,
            serverID: state.serverID,
            password: action.password
        });
    }

    return next(action);
};

export function startSocket(store, serverURL) {
    socket = new io(serverURL);

    socket.on('chat message', (message) => {
        console.log('received chat');
        store.dispatch(receiveMessage(message));
    });

    socket.on('message', (message) => {
        console.log('received message', message);
        store.dispatch(receiveID(message.id));
    });
}

export default socketMiddleware;
