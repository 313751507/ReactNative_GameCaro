import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import pic from '../images/irina.jpg';

import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { mainStyles } from './styles';
import global from '../Global';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    global.socket.on('SERVER_SEND_THACH_DAU', id => this.onReceiveThachDau(id));
    global.socket.on('SERVER_SEND_REPLY_THACH_DAU', data => console.log(data));
  }

  onReceiveReply(data) {
    console.log(data);
  }

  onReceiveThachDau(id) {
    Alert.alert('THACH DAU', 'CHAP NHAN LOI THACH DAU?',
      [{ text: 'YES', onPress: () => this.reply(id, 'YES') },
      { text: 'NO', onPress: () => this.reply(id, 'NO') }],
      { cancelable: false });
  }

  reply(id, value) {
    //console.log(id + '--' + value);
    global.socket.emit('USER_REPLY_THACH_DAU', { id, value });
  }

  render() {
    const { container } = mainStyles;
    return (
      <Image style={container} source={pic}>
        {<LeftContainer navigation={this.props.navigation} />}
        <RightContainer />
      </Image>
    );
  }
}
