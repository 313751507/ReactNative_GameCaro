import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { signUpStyles, signInStyles } from './styles';
import global from '../Global';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: ''
        };
        global.socket.on('SERVER_SEND_DANG_KY', data => this.onReceive(data));
    }

    onReceive(data) {
        Alert.alert('THONG BAO',
            data,
            [{ text: 'OK' }],
            { cancelable: false }
        );
    }

    dangKy() {
        const { name, email, password, repassword } = this.state;
        if (name === '' || email === '' || password === '' || repassword === '') {
            this.onReceive('VUI LONG NHAP THONG TIN DAY DU');
        } else if (password !== repassword) {
            this.onReceive('MAT KHAU KHONG HOP LE');
        } else {
            global.socket.emit('USER_DANG_KY', { email, name, password });
        }
    }

    render() {
        const { input, button, buttonText } = signInStyles;
        const { container } = signUpStyles;
        const { email, name, password, repassword } = this.state;
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
                    onChangeText={text => this.setState({ name: text })}
                    value={name}
                    placeholder='Enter your name'
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
                <TextInput
                    style={input}
                    onChangeText={text => this.setState({ repassword: text })}
                    value={repassword}
                    placeholder='Confirm your password'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    secureTextEntry
                />
                <TouchableOpacity style={button} onPress={this.dangKy.bind(this)}>
                    <Text style={buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
