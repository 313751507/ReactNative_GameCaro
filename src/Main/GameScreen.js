import React, { Component } from 'react';
import { Image } from 'react-native';
import pic from '../images/irina.jpg';

import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { mainStyles } from './styles';

export default class GameScreen extends Component {
  render() {
    const { container } = mainStyles;
    return (
      <Image style={container} source={pic}>
        <LeftContainer />
        <RightContainer />
      </Image>
    );
  }
}
