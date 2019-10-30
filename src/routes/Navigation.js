// React Navigation imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js';

// Main stack navigator
const Navigation = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: () => ({
            header: null,
            gesturesEnabled: false
        }),
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: null,
            gesturesEnabled: false
        }),
    }
}, {
    initialRouteName: 'LoginScreen'
});

export default createAppContainer(Navigation);