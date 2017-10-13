import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, Alert
} from 'react-native';
import { connect } from 'react-redux';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { dangNhapStyles } from './styles';
import pic from '../images/irina.jpg';

class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fragment: <SignIn onReceive={data => this.onReceive(data)} />
        };
        
    }

    componentDidMount() {
        const {socket} = this.props;
        socket.on('SERVER_SEND_DANG_KY', data => this.onReceive(data));
        socket.on('SERVER_SEND_DANG_NHAP_THAT_BAI', data => this.onReceive(data));
        socket.on('SERVER_SEND_DANG_NHAP_THANH_CONG', info => this.onSuccess(info));
    }

    onSuccess(info) {
        const { navigation } = this.props;
        navigation.navigate('MAIN', { info });
    }

    onReceive(data) {
        Alert.alert('THONG BAO',
            data,
            [{ text: 'OK' }],
            { cancelable: false }
        );
    }

    replaceFragment(mode) {
        if (mode === 0) {
            this.setState({
                fragment: <SignIn onReceive={data => this.onReceive(data)} />
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

function mapStateToProps(state) {
    return { socket: state.socket };
}

export default connect(mapStateToProps)(DangNhap);
