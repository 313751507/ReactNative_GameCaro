import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import pic from '../images/irina.jpg';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { mainStyles } from './styles';

class GameScreen extends Component {
  componentDidMount() {
    const { socket } = this.props;
    socket.on('SERVER_SEND_DS_USERS_ONLINE', ds => this.onUserDangNhap(ds));
    socket.on('SERVER_SEND_THACH_DAU', data => this.onThachDau(data));
    socket.on('SERVER_SEND_REPLY', data => this.onReply(data));
  }

  onUserDangNhap(ds) {
    this.props.dispatch({ type: 'UPDATE_DS_USER', ds });
  }

  onThachDau(data) {
    const { id, name } = data;
    Alert.alert('Thông báo', `${name} thách đấu bạn!`,
      [{ text: 'Chơi', onPress: () => this.reply(id, 'YES') },
      { text: 'Thôi', onPress: () => this.reply(id, 'NO') }],
      { cancelable: false });
  }

  onReply(result) {
    let message;
    if (result === 'YES') {
      message = 'Đối phương đã chấp nhận.';
    } else {
      message = 'Đối phương đã từ chối.';
    }
    Alert.alert('Thông báo', message,
      [{ text: 'OK', onPress: result === 'YES' ? () => this.showRightContainer() : null },
      { cancelable: false }]);
  }

  showRightContainer() {
    this.props.dispatch({ type: 'TOGGLE_PLAYING_STATE' });
  }

  reply(id, result) {
    this.props.socket.emit('USER_SEND_REPLY', { id, result });
    if (result === 'YES') this.showRightContainer();
  }

  render() {
    const { container } = mainStyles;
    return (
      <Image style={container} source={pic}>
        <LeftContainer navigation={this.props.navigation} isPlaying={false} />
        <RightContainer />
      </Image>
    );
  }
}

function mapStateToProps(state) {
  return { socket: state.socket };
}

export default connect(mapStateToProps)(GameScreen);
