import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import OrderListing from '../screens/orderListing';

const tabConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
}

const routeConfig = {
    Home: Home,
    OrderListing: OrderListing
}

const AppNavigator = new createStackNavigator(routeConfig, tabConfig)

export default AppNavigator;