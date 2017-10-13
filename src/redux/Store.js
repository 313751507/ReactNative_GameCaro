import { createStore } from 'redux';
import SocketIOClient from 'socket.io-client';

const defaultState = {
    socket: SocketIOClient('http://192.168.0.106:3000')
};

const reducer = (state = defaultState, action) => {
    return state;
};

export default createStore(reducer);    