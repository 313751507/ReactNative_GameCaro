import React, { Component } from 'react';
import { View } from 'react-native';
import { mapContainer } from './styles';
import RowButton from './RowButton';

export default class RightContainer extends Component {
    createRows(amount) {
        const mang = [];
        for (let i = 0; i < amount; i++) {
            mang.push(<RowButton key={i} row={i} />);
        }
        return mang;
    }
    render() {
        const { container } = mapContainer;
        const { isPlaying } = this.props;
        const theRight = isPlaying ? this.createRows(11) : <View style={container} />;
        return (
            <View style={container}>
                {theRight}
            </View>
        );
    }
}
