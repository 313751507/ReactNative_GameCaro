export function updateDsUser(ds) {
    return { type: 'UPDATE_DS_USER', ds };
}

export function toggleIsLogin() {
    return { type: 'CHANGE_LOGIN_STATE' };
}

export function toggleIsPlaying() {
    return { type: 'TOGGLE_PLAYING_STATE' };
}
export function changePlayerState(state) {
    return { type: 'CHANGE_PLAYER_STATE', playerState: state };
}

export function changeRoom() {
    return { type: 'CHANGE_ROOM' };
}

export function leaveMatch() {
    return { type: 'LEAVE_MATCH' };
}
