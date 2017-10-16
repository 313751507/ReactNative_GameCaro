import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import pic from '../images/irina.jpg';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { mainStyles } from './styles';

class GameScreen extends Component {
  componentDidMount() {
    const { socket, dispatch } = this.props;
    socket.on('SERVER_SEND_DS_USERS_ONLINE', ds => {
      dispatch({ type: 'UPDATE_DS_USER', ds });
    });
    socket.on('SERVER_SEND_THACH_DAU', data => {
      const { id, name } = data;
      Alert.alert('Thông báo', `${name} thách đấu bạn!`,
        [{ text: 'Chơi', onPress: () => this.reply(id, 'YES') },
        { text: 'Thôi', onPress: () => this.reply(id, 'NO') }],
        { cancelable: false });
    });
    socket.on('SERVER_SEND_REPLY', data => {
      Alert.alert('Thông báo', data,
        [{ text: 'OK', onPress: () => this.handleThachDau(data) },
        { cancelable: false }]);
    });
  }

  showRightContainer() {
    this.props.dispatch({ type: 'TOGGLE_PLAYING_STATE' });
  }

  handleThachDau(result) {
    if (result === 'YES') {
      // Dong y thach dau
      this.showRightContainer();
    } else {
      // Tu choi thach dau
    }
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
