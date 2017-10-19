const isLoginReducer = (state = false, action) => {
    if (action.type === 'CHANGE_LOGIN_STATE') return !state;
    return state;
};

export default isLoginReducer;
