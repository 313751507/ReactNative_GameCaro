import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import MainStack from './Router';

import global from './Global';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://192.168.1.108:3000');
    global.socket = this.socket;
  }
  render() {
    return <MainStack myprops={'function'} />;
  }
}
