import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        width,
        height
    },
    leftContainer: {
        flex: 2,
    },
    rightContainer: {
        flex: 8,
    }
});

export const leftContainer = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white'
    },
    button: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 4,
        width: (width / 5) - (width / 80),
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    }
});
