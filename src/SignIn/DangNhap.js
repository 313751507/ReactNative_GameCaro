import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, Alert
} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { dangNhapStyles } from './styles';
import pic from '../images/irina.jpg';
import global from '../Global';

export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fragment: <SignIn navigation={props.navigation} onReceive={data => this.onReceive(data)} />
        };
        global.socket.on('SERVER_SEND_DANG_KY', data => this.onReceive(data));
        global.socket.on('SERVER_SEND_DANG_NHAP', data => this.onReceive(data));
    }

    onReceive(data) {
        Alert.alert('THONG BAO',
            data,
            [{ text: 'OK' }],
            { cancelable: false }
        );
    }

    replaceFragment(mode) {
        const { navigation } = this.props;
        if (mode === 0) {
            this.setState({
                fragment: <SignIn navigation={navigation} onReceive={data => this.onReceive(data)} />
            });
        } else if (mode === 1) {
            this.setState({
                fragment: <SignUp onReceive={data => this.onReceive(data)} />
            });
        }
    }

    render() {
        const { fragment } = this.state;
        const { container, content, footer, button, buttonText } = dangNhapStyles;
        return (
            <Image style={container} source={pic}>
                <View style={content}>
                    {fragment}
                </View>
                <View style={footer}>
                    <TouchableOpacity
                        style={button}
                        onPress={() => this.replaceFragment(0)}
                    >
                        <Text style={buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={button}
                        onPress={() => this.replaceFragment(1)}
                    >
                        <Text style={buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}
