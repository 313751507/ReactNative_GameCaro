import { Alert } from 'react-native';

export function onReceive(data) {
    Alert.alert('Thông báo',
        data,
        [{ text: 'OK' }],
        { cancelable: false });
}
