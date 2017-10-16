import React, { Component } from 'react';
import {
    View, Text, FlatList, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { leftContainer } from './styles';
import { onReceive } from '../Global';

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
        if (!this.props.isPlaying) {
            const { id, email } = item;
            if (email === this.user.email) {
                onReceive('Không thể mời người này...');
            } else {
                this.props.socket.emit('USER_SEND_THACH_DAU', id);
            }
        } else {
            onReceive('Đang chơi sao mời được he!');
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
                    data={this.props.ds}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.email}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        socket: state.socket,
        ds: state.dsUser,
        isPlaying: state.isPlaying
    };
}

export default connect(mapStateToProps)(LeftContainer);
