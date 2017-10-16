import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image
} from 'react-native';
import { connect } from 'react-redux';
import { onReceive } from '../Global';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { dangNhapStyles } from './styles';
import pic from '../images/irina.jpg';

class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fragment: <SignIn />
        };
    }

    componentDidMount() {
        const { socket } = this.props;
        socket.on('SERVER_SEND_DANG_NHAP_THAT_BAI', data => onReceive(data));
        socket.on('SERVER_SEND_DANG_NHAP_THANH_CONG', ds => this.onSuccess(ds));
    }

    onSuccess(ds) {
        const { navigation, dispatch } = this.props;
        dispatch({ type: 'CHANGE_LOGIN_STATE', ds });

        //Gửi email và name sang GameScreen.
        navigation.navigate('MAIN', ds[ds.length - 1]);
    }

    replaceFragment(mode) {
        if (mode === 0) {
            this.setState({
                fragment: <SignIn />
            });
        } else if (mode === 1) {
            this.setState({
                fragment: <SignUp />
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
