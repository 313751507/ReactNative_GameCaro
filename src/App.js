import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import MainStack from './Router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://192.168.0.106:3000');
  }
  componentDidMount() {
    console.log('MEO');
  }
  render() {
    return <MainStack />;
  }
}
