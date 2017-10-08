import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';
import { rowStyles } from './styles';

const buttonAmounts = 16;
export default class RowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        };
    }

    drawRow() {
        const { row } = this.props;
        const buttons = [];
        for (let i = 0; i < buttonAmounts; i++) {
            buttons.push(
                <Button row={row} i={i} key={i} />
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
