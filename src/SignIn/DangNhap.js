import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {dangNhapStyles} from './styles';
import pic from '../images/irina.jpg';

export default class DangNhap extends Component {
    render() {
        const {container, content, footer, button, buttonText} = dangNhapStyles;
        return (
            <Image style={container} source={pic}>
                <View style={content}>
                    <SignUp />
                </View>
                <View style={footer}>
                    <TouchableOpacity style={button}>
                        <Text style={buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <Text style={buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}


