import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RowButton from './RowButton';

export default class RightContainer extends Component {
    render() {
        return (
            <View>
                <RowButton row={1} />
            </View>
        );
    }
}
