import { createStore } from 'redux';
import reducer from './reducers/Reducers';

// const defaultState = {
//   dsUser: [],
//   isLogin: false,
//   isPlaying: false,
//   playerState: '...',
//   room: undefined,
// };

// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'UPDATE_DS_USER':
//       return { ...state, dsUser: action.ds };
//     case 'CHANGE_LOGIN_STATE':
//       return { ...state, isLogin: !state.isLogin };
//     case 'TOGGLE_PLAYING_STATE':
//       return { ...state, isPlaying: !state.isPlaying };
//     case 'CHANGE_ROOM':
//       return { ...state, room: action.room };
//     case 'LEAVE_MATCH':
//       return { ...state, room: undefined };
//     case 'CHANGE_PLAYER_STATE':
//       return { ...state, playerState: action.playerState };
//     default:
//       return state;
//   }
// };

export default createStore(reducer);
