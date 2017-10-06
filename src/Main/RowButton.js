import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const buttonAmounts = 16;
const buttonWidth = width * 0.8 / buttonAmounts;
export default class RowButton extends Component {

    clickButton(row, col) {
        console.log(row + ' - ' + col);
    }

    myFunc() {
        const {row} = this.props;
        buttons = [];
        const { button } = styles;
        for (let i = 0; i < buttonAmounts; i++) {
            buttons.push(
                <TouchableOpacity style={button} key={i} onPress={() => this.clickButton(row, i)}>
                    <Text></Text>
                </TouchableOpacity>
            );
        }
        return buttons;
    }

    render() {
        const { container, button } = styles;
        return (
            <View style={container}>
                {this.myFunc()}
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#9072cc'
    },
    button: {
        width: buttonWidth,
        height: buttonWidth,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray'
    }
});
