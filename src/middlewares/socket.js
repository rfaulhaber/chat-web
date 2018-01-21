import io from 'socket.io-client';
import {SEND_MESSAGE, receiveMessage} from '../actions/MessageActions';
import { receiveID } from '../actions/AuthActions';

let socket = null;

const socketMiddleware = store => next => action => {
    if (action.type === SEND_MESSAGE) {
        console.log('emitting chat');
        const message = Object.assign({}, action.message, {from: store.getState().serverID});
        action.message = message;
        socket.emit('chat message', message);
    }

    return next(action);
};

export function startSocket(store, serverURL) {
    socket = new io(serverURL);

    socket.on('chat message', function(message) {
        console.log('received chat');
        store.dispatch(receiveMessage(message));
    });

    socket.on('message', function(message) {
        console.log('received message', message);
        store.dispatch(receiveID(message.id));
    });
}

export default socketMiddleware;