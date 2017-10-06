import { StackNavigator } from 'react-navigation';
import DangNhap from './SignIn/DangNhap';
import GameScreen from './Main/GameScreen';

const MainStack = StackNavigator({
    DANG_NHAP: {
        screen: GameScreen,
        navigationOptions: {
            header: false
        }
    },
    MAIN: {
        screen: GameScreen,
        navigationOptions: {
            header: false
        }
    }
});

export default MainStack;
