import React, { Component } from 'react';
import { Image } from 'react-native';
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
  }

  render() {
    const { container } = mainStyles;
    return (
      <Image style={container} source={pic}>
        <LeftContainer navigation={this.props.navigation} isPlaying={false} />
        <RightContainer isPlaying={false} />
      </Image>
    );
  }
}

function mapStateToProps(state) {
  return { socket: state.socket };
}

export default connect(mapStateToProps)(GameScreen);
