import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { rowStyles } from './styles';
import iconX from '../images/x_icon.png';
import iconO from '../images/o_icon.png';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        };
    }

    clickButton() {
        this.setState({
            img: iconX  
        });
    }

    render() {
        // const { row, i } = this.props;        
        const { button, icon } = rowStyles;
        const { img } = this.state;
        return (
            <TouchableOpacity
                style={button}
                onPress={() => this.clickButton()}
            >
                <Image source={img} style={icon} />
            </TouchableOpacity>
        );
    }
}
