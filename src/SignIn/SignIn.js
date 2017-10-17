import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { signInStyles } from './styles';
import { simpleAlert } from '../Global';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'chicharito@gmail.com',
            password: '123',
        };
    }

    dangNhap() {
        const { email, password } = this.state;
        if (email === '' || password === '') {
            simpleAlert('Nhập thông tin đẩy đủ');
        }
        this.props.socket.emit('USER_SEND_DANG_NHAP', { email, password });
    }

    render() {
        const { email, password } = this.state;
        const { container, input, button, buttonText } = signInStyles;
        return (
            <View style={container}>
                <TextInput
                    style={input}
                    onChangeText={text => this.setState({ email: text })}
                    value={email}
                    placeholder='Enter your email'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={input}
                    onChangeText={text => this.setState({ password: text })}
                    value={password}
                    placeholder='Enter your password'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    secureTextEntry
                />
                <TouchableOpacity style={button} onPress={() => this.dangNhap()}>
                    <Text style={buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { socket: state.socket };
}

export default connect(mapStateToProps)(SignIn);
