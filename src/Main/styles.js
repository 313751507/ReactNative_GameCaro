import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const buttonAmounts = 16;
const buttonWidth = (width * 0.8) / buttonAmounts;
export const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        width,
        height
    },
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

export const mapContainer = StyleSheet.create({
    container: {
        flex: 4,
    }
});

export const rowStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        width: buttonWidth,
        height: buttonWidth,
        borderWidth: 1,
        borderColor: 'white'
    }
});
