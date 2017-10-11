import React, { Component } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, ToastAndroid
} from 'react-native';
import global from '../Global';
import { leftContainer } from './styles';

export default class LeftContainer extends Component {
    constructor(props) {
        super(props);
        const { users } = props.navigation.state.params.info;
        this.state = {
            ds: users,
        };
    }

    componentDidMount() {
        // Lắng nghe user mới đăng nhập thành công.
        global.socket.on('SERVER_SEND_USER_INFO', info => this.onUserSignIn(info));
        // Lắng nghe user đăng xuất 
        global.socket.on('SERVER_SEND_USER_DANG_XUAT', info => this.onUserExit(info));
    }

    onUserSignIn(info) {
        const { email, name } = info;
        const { ds } = this.state;
        this.setState({
            ds: [...ds, { email, name }]
        });
    }

    onUserExit(info) {
        const { email } = info;
        const { ds } = this.state;
        this.setState({
            ds: ds.filter(e => e.email !== email)
        });
    }

    goBack() {
        const { navigation } = this.props;
        global.socket.emit('USER_DANG_XUAT');
        navigation.goBack();
    }

    clickItem(item) {
        const { name, email } = item;
        const { isPlaying } = this.props;
        if (!isPlaying) {
            if (name === this.props.navigation.state.params.info.name) {
                console.log('NGU NHU BO');
            } else {
                global.socket.emit('USER_SEND_THACH_DAU', email);
            }
        } else {
            ToastAndroid.show('DANG CHOI ROI', ToastAndroid.SHORT);
        }
    }

    renderItem(item) {
        const { button, buttonText } = leftContainer;
        return (
            <TouchableOpacity style={button} onPress={() => this.clickItem(item)}>
                <Text style={buttonText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { container, title, backButton, backButtonText } = leftContainer;
        return (
            <View style={container}>
                <TouchableOpacity style={backButton} onPress={this.goBack.bind(this)}>
                    <Text style={backButtonText}>EXIT</Text>
                </TouchableOpacity>
                <Text style={title}>LIST USERS</Text>
                <FlatList
                    data={this.state.ds}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.email}
                />
            </View>
        );
    }
}
