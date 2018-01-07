import io from 'socket.io-client';

export const CONNECT = 'CONNECT';

export function connectIO(serverURL) {
    return {
        type: CONNECT,
        url: serverURL,
        io: new io(serverURL)
    };
}