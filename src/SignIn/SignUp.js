import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {signUpStyles, signInStyles} from './styles';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: ''
        };
    }
    render() {
        const {input, button, buttonText} = signInStyles;
        const {container} = signUpStyles;
        const {email, name, password, repassword} = this.state;
        return (
            <View style={container}>
                <TextInput 
                    style={input}
                    onChangeText={text => this.setState({email: text})}
                    value={email}
                    placeholder='Enter your email'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                />
                <TextInput 
                    style={input}
                    onChangeText={text => this.setState({name: text})}
                    value={name}
                    placeholder='Enter your name'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                />
                <TextInput 
                    style={input}
                    onChangeText={text => this.setState({password: text})}
                    value={password}
                    placeholder='Enter your password'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'                    
                    secureTextEntry
                />
                <TextInput 
                    style={input}
                    onChangeText={text => this.setState({repassword: text})}
                    value={repassword}
                    placeholder='Confirm your password'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'                    
                    secureTextEntry
                />
                <TouchableOpacity style={button}>
                    <Text style={buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}