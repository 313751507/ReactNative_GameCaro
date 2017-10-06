import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const dangNhapStyles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height
    },
    content: {
        flex: 8,
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        width: (width / 2) - (width / 8),
        height: height / 10,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export const signInStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        width: width * 0.8,
        margin: 8,
        color: 'white',
        paddingLeft: width * 0.03,
    },
    button: {
        width: width / 2,
        height: height / 10,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export const signUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
