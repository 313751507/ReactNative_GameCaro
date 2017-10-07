import React, { Component } from 'react';
import {
    View, Text, FlatList, TouchableOpacity
} from 'react-native';
import global from '../Global';
import { leftContainer } from './styles';

export default class LeftContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: [
                { id: 1, name: 'Ronaldo' }, { id: 2, name: 'Messi' },
                { id: 3, name: 'Ibrahimovic' }, { id: 4, name: 'Rooney' },
                { id: 5, name: 'Chicharito' }, { id: 6, name: 'Lukaku' },
                { id: 7, name: 'Hazard' }, { id: 8, name: 'Robben' },
                { id: 9, name: 'Ronaldo' }, { id: 10, name: 'Messi' },
                { id: 11, name: 'Ibrahimovic' }, { id: 12, name: 'Rooney' },
                { id: 13, name: 'Chicharito' }, { id: 14, name: 'Lukaku' },
                { id: 15, name: 'Hazard' }, { id: 16, name: 'Robben' }
            ],
        };
    }

    goBack() {
        const { navigation } = this.props;        
        const { name, email } = navigation.state.params.info;
        global.socket.emit('USER_DANG_XUAT', { name, email });
        navigation.goBack();
    }

    renderItem(item) {
        const { button, buttonText } = leftContainer;
        return (
            <TouchableOpacity style={button}>
                <Text style={buttonText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { container, title, backButton, backButtonText } = leftContainer;
        const { ds } = this.state;
        return (
            <View style={container}>
                <TouchableOpacity style={backButton} onPress={this.goBack.bind(this)}>
                    <Text style={backButtonText}>EXIT</Text>
                </TouchableOpacity>
                <Text style={title}>LIST USERS</Text>
                <FlatList
                    data={ds}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}
