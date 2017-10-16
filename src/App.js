import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainStack from './Router';

class App extends Component {
  componentDidMount() {
    const { socket, dispatch, isLogin } = this.props;
    socket.on('SERVER_SEND_USER_INFO', data => {
      if (this.props.isLogin) dispatch({ type: 'UPDATE_DS_USER', data });
    });
    socket.on('SERVER_SEND_USER_DANG_XUAT', data => {
      if (this.props.isLogin) dispatch({ type: 'REMOVE_USER_FROM_DS', data });
    });
  }
  render() {
    return (
      <MainStack />
    );
  }
}

function mapStateToProps(state) {
  return { socket: state.socket, isLogin: state.isLogin };
}

export default connect(mapStateToProps)(App);
