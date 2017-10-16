import React, { Component } from 'react';
import {
    View, Text, FlatList, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { leftContainer } from './styles';

class LeftContainer extends Component {
    goBack() {
        const { navigation, socket } = this.props;
        socket.emit('USER_SEND_DANG_XUAT');
        navigation.goBack();
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
    return { socket: state.socket, ds: state.dsUser };
}

export default connect(mapStateToProps)(LeftContainer);
