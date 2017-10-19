import { combineReducers } from 'redux';

import socketReducer from './socketReducer';
import dsUserReducer from './dsUserReducer';
import isLoginReducer from './isLoginReducer';
import isPlayingReducer from './isPlayingReducer';
import playerStateReducer from './playerStateReducer';
import roomReducer from './roomReducer';

const reducer = combineReducers({
    socket: socketReducer,
    dsUser: dsUserReducer,
    isLogin: isLoginReducer,
    isPlaying: isPlayingReducer,
    playerState: playerStateReducer,
    room: roomReducer
});

export default reducer;
