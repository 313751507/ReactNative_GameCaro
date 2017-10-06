import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RowButton from './RowButton';


export default class App extends Component {
  render() {
    const { container, leftContainer, rightContainer } = styles;
    return (
      <View style={container}>
        <View style={leftContainer}></View>
        <View style={rightContainer}>
          <RowButton row={0}/>
          <RowButton row={1}/>
          <RowButton row={2}/>
          <RowButton row={3}/>
          <RowButton row={4}/>
          <RowButton row={5}/>
          <RowButton row={6}/>
          <RowButton row={7}/>
          <RowButton row={8}/>
          <RowButton row={9}/>
          <RowButton row={10}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  rightContainer: {
    flex: 8,
    backgroundColor: 'lightgreen'
  }
});
