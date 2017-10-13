import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import {connect} from 'react-redux';
import pic from '../images/irina.jpg';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { mainStyles } from './styles';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      idEnemy: undefined
    };

  }

  componentDidMount() {
    const {socket} = this.props;
    socket.on('SERVER_SEND_THACH_DAU', id => this.onReceiveThachDau(id));
    socket.on('SERVER_SEND_REPLY_THACH_DAU', answer => this.onReceiveReply(answer));
  }

  onReceiveReply(answer) {
    if (answer === 'YES') {
      this.setState({
        isPlaying: true
      });
    } else {
      Alert.alert('THONG BAO',
        'NGUOI CHOI TU CHOI',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      this.setState({
        idEnemy: undefined
      });
    }
  }

  onReceiveThachDau(id) {
    this.setState({
      idEnemy: id
    });
    Alert.alert('THACH DAU', 'CHAP NHAN LOI THACH DAU?',
      [{ text: 'YES', onPress: () => this.reply(id, 'YES') },
      { text: 'NO', onPress: () => this.reply(id, 'NO') }],
      { cancelable: false });
  }

  reply(id, value) {
    if (value === 'YES') {
      this.setState({
        isPlaying: true
      });
    } else {
      this.setState({
        idEnemy: undefined
      });
    }
    this.props.socket.emit('USER_REPLY_THACH_DAU', { id, value });
  }

  render() {
    const { container } = mainStyles;
    const { isPlaying, idEnemy } = this.state;
    return (
      <Image style={container} source={pic}>
        <LeftContainer navigation={this.props.navigation} isPlaying={isPlaying} />
        <RightContainer isPlaying={isPlaying} idEnemy={idEnemy} />
      </Image>
    );
  }
}

function mapStateToProps(state) {
  return {socket: state.socket};
}

export default connect(mapStateToProps)(GameScreen);
