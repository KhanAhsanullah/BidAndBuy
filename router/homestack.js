import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/stack';
import Home from '../screen/Home';
import Login from '../screens/Login';
import About from '../screens/About';

const screen ={
    Home:{
        screen:Home
    },
    Login:
    {
        screen:Login
    }
}
const HomeStack = createStackNavigator(screen);
export default createAppContainer(HomeStack);