import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { signUpStyles, signInStyles } from './styles';
import apiSignUp from '../api/apiSignUp';
import { simpleAlert } from '../Global';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: ''
        };
    }

    dangKy() {
        const { name, email, password, repassword } = this.state;
        if (name === '' || email === '' || password === '' || repassword === '') {
            simpleAlert('Nhập thông tin đầy đủ.');
        } else if (password !== repassword) {
            simpleAlert('Mật khẩu không hợp lệ.');
        } else {
            apiSignUp(email, name, password)
                .then(res => res.text())
                .then(text => simpleAlert(text))
                .catch(err => console.log(err));
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

export default SignUp;
