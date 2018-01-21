export const AUTHENTICATE = 'AUTHENTICATE';
export const RECEIVE_ID = 'RECEIVE_ID';

export function authenticate(userID, password) {
    console.log('authenticate', userID, password);
    return {
        type: AUTHENTICATE,
        userID,
        password,
    };
}

export function receiveID(serverID) {
    return {
        type: RECEIVE_ID,
        serverID,
    };
}
