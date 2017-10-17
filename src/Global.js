import { Alert } from 'react-native';

export function simpleAlert(data) {
    Alert.alert('Thông báo',
        data,
        [{ text: 'OK' }],
        { cancelable: false });
}
