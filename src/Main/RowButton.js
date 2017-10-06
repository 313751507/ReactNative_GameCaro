import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { rowStyles } from './styles';

const buttonAmounts = 16;
export default class RowButton extends Component {
    clickButton(row, col) {
        console.log(`${row} -   ${col}`);
    }

    drawRow() {
        const { row } = this.props;
        const buttons = [];
        const { button } = rowStyles;
        for (let i = 0; i < buttonAmounts; i++) {
            buttons.push(
                <TouchableOpacity
                    style={button}
                    key={i} onPress={() => this.clickButton(row, i)}
                />
            );
        }
        return buttons;
    }

    render() {
        const { container } = rowStyles;
        return (
            <View style={container}>
                {this.drawRow()}
            </View>
        );
    }
}
