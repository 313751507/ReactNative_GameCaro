const playerStateReducer = (state = '...', action) => {
    if (action.type === '') return action.playerState;
    return state;
};

export default playerStateReducer;
