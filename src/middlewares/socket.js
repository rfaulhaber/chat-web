import {SEND_MESSAGE} from '../actions/MessageActions';

const socketMiddleware = store => next => action => {
    if (action.type === SEND_MESSAGE) {
        const io = store.getState().io;

        console.log('emitting chat');
        io.emit('chat message', action.message.text); 
    }

    return next(action);
};

export default socketMiddleware;