export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        message: {
            text: message,
            timestamp: new Date(),
        },
    };
}

export function receiveMessage(message) {
    return {
        type: RECEIVE_MESSAGE,
        message: {
            text: message,
            timestamp: message.timestamp || new Date(),
        },
    };
}
