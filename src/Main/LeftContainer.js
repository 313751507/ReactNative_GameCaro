import React, { Component } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, Alert
} from 'react-native';
import { connect } from 'react-redux';
import { leftContainer } from './styles';
import { simpleAlert } from '../Global';

class LeftContainer extends Component {
    constructor(props) {
        super(props);
        const { email, name } = props.navigation.state.params;
        this.user = {
            email,
            name
        };
    }
    goBack() {
        const { navigation, socket } = this.props;
        socket.emit('USER_SEND_DANG_XUAT');
        navigation.goBack();
    }

    clickItem(item) {
        const { isPlaying, socket } = this.props;
        if (!isPlaying) {
            const { id, email } = item;
            if (email === this.user.email) {
                simpleAlert('Không thể mời người này...');
            } else {
                socket.emit('USER_SEND_THACH_DAU', id);
            }
        } else {
            simpleAlert('Đang chơi sao mời được he!');
        }
    }

    cancle() {
        Alert.alert('Thông báo', 'Xác nhận hủy ván?', [
            { text: 'Xác nhận', onPress: () => this.acceptTheCancle() },
            { text: 'Thôi' }
        ], { cancelable: false });
    }

    acceptTheCancle() {
        // Xác nhận hủy ván.
        /*
        1. Gửi thông báo lên server.
        2. Thay đổi trạng thái của màn hình.
        */
        const { socket, room, dispatch } = this.props;
        socket.emit('USER_A_LEAVES_ROOM', room);
        dispatch({ type: 'LEAVE_MATCH' });
        dispatch({ type: 'TOGGLE_PLAYING_STATE' });
        dispatch({ type: 'CHANGE_PLAYER_STATE', playerState: '...' });
    }

    renderItem(item) {
        const { button, buttonText } = leftContainer;
        return (
            <TouchableOpacity style={button} onPress={() => this.clickItem(item)}>
                <Text style={buttonText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    renderCancleButton() {
        const { cancleButton, cancleText } = leftContainer;
        return (
            <TouchableOpacity style={cancleButton} onPress={this.cancle.bind(this)}>
                <Text style={cancleText}>Hủy ván</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const {
            container, title, backButton, backButtonText, stateTextContainer, stateText,
        } = leftContainer;
        return (
            <View style={container}>
                <TouchableOpacity style={backButton} onPress={this.goBack.bind(this)}>
                    <Text style={backButtonText}>EXIT</Text>
                </TouchableOpacity>
                <Text style={title}>LIST USERS</Text>
                <FlatList
                    data={this.props.ds}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.email}
                />
                <View style={stateTextContainer}>
                    <Text style={stateText}>{this.props.playerState}</Text>
                    {this.props.isPlaying ? this.renderCancleButton() : null}
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        socket: state.socket,
        ds: state.dsUser,
        isPlaying: state.isPlaying,
        playerState: state.playerState,
        room: state.room
    };
}

export default connect(mapStateToProps)(LeftContainer);
