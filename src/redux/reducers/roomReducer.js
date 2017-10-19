const roomReducer = (state = null, action) => {
    if (action.type === 'CHANGE_ROOM') return action.room;
    if (action.type === 'LEAVE_MATCH') return null;
    return state;
};

export default roomReducer;
