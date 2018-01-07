import io from 'socket.io-client';
import {SEND_MESSAGE, receiveMessage} from '../actions/MessageActions';

let socket = null;

const socketMiddleware = store => next => action => {
    if (action.type === SEND_MESSAGE) {
        console.log('emitting chat');
        socket.emit('chat message', action.message.text); 
    }

    return next(action);
};

export function startSocket(store, serverURL) {
    socket = new io(serverURL);

    socket.on('chat message', function(message) {
        console.log('received chat');
        store.dispatch(receiveMessage(message));
    });
}

export default socketMiddleware;