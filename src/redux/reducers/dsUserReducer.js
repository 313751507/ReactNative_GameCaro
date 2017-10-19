const dsUserReducer = (state = [], action) => {
    if (action.type === 'UPDATE_DS_USER') {
        return action.ds;
    }
    return state;
};

export default dsUserReducer;
