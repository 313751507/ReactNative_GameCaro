import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import pic from '../images/irina.jpg';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { mainStyles } from './styles';
import { simpleAlert } from '../Global';

class GameScreen extends Component {
  componentDidMount() {
    const { socket } = this.props;
    socket.on('SERVER_SEND_DS_USERS_ONLINE', ds => this.onUserDangNhap(ds));
    socket.on('SERVER_SEND_THACH_DAU', data => this.onThachDau(data));
    socket.on('SERVER_SEND_REPLY', data => this.onReply(data));
    socket.on('SERVER_SEND_LEAVE_ROOM', room => this.onLeaveRoom(room));
  }

  onLeaveRoom(room) {
    const { dispatch, socket } = this.props;
    simpleAlert('Đối phương đã rời khỏi phòng');
    dispatch({ type: 'LEAVE_MATCH' });
    dispatch({ type: 'TOGGLE_PLAYING_STATE' });
    dispatch({ type: 'CHANGE_PLAYER_STATE', playerState: '...' });
    socket.emit('USER_B_LEAVE_ROOM', room);
  }

  onUserDangNhap(ds) {
    this.props.dispatch({ type: 'UPDATE_DS_USER', ds });
  }

  onThachDau(data) {
    const { id, name, room } = data;
    Alert.alert('Thông báo', `${name} thách đấu bạn!`,
      [{ text: 'Chơi', onPress: () => this.reply(id, 'YES', room) },
      { text: 'Thôi', onPress: () => this.reply(id, 'NO', room) }],
      { cancelable: false });
  }

  onReply(data) {
    const { result, room } = data;
    const { socket, dispatch } = this.props;
    let message;
    if (result === 'YES') {
      dispatch({
        type: 'CHANGE_ROOM',
        room
      });
      message = 'Đối phương đã chấp nhận.';
    } else {
      socket.emit('USER_LEAVES_ROOM', room);
      message = 'Đối phương đã từ chối.';
    }
    Alert.alert('Thông báo', message,
      [{ text: 'OK', onPress: result === 'YES' ? () => this.showRightContainer() : null },
      { cancelable: false }]);
  }

  showRightContainer() {
    this.props.dispatch({ type: 'TOGGLE_PLAYING_STATE' });
  }

  reply(id, result, room) {
    const { socket, dispatch } = this.props;
    socket.emit('USER_SEND_REPLY', { id, result, room });
    if (result === 'YES') {
      dispatch({
        type: 'CHANGE_ROOM',
        room
      });
      this.showRightContainer();
    }
  }

  render() {
    const { container } = mainStyles;
    return (
      <Image style={container} source={pic}>
        <LeftContainer navigation={this.props.navigation} />
        <RightContainer />
      </Image>
    );
  }
}

function mapStateToProps(state) {
  return {
    socket: state.socket,
  };
}

export default connect(mapStateToProps)(GameScreen);
