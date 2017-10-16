import { createStore } from 'redux';
import SocketIOClient from 'socket.io-client';

const defaultState = {
  socket: SocketIOClient('http://192.168.1.109:3000'),
  dsUser: [],
  isLogin: false,
  isPlaying: false
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'UPDATE_DS_USER') {
    console.log(action.ds);
    return { ...state, dsUser: action.ds };
  }
  if (action.type === 'CHANGE_LOGIN_STATE') {
    return { ...state, isLogin: !state.isLogin, dsUser: action.ds };
  }
  return state;
};

export default createStore(reducer);
