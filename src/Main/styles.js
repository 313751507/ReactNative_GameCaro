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
    backButton: {
        width: (width * 0.2) - (width * 0.01),
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        padding: width / 100
    },
    backButtonText: {
        color: 'white'
    },
    title: {
        fontSize: width / 32,
        color: 'white'
    },
    button: {
        borderWidth: 1,
        borderColor: 'white',
        padding: width / 200,
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
