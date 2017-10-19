const isPlayingReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_PLAYING_STATE') return !state;
    return state;
};

export default isPlayingReducer;
