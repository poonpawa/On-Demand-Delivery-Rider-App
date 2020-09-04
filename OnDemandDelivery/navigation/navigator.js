import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/home';
import Login from '../screens/login';
import Register from '../screens/register';
import Loading from '../screens/loading';
import OrderListing from '../screens/orderListing';
import { Icon } from 'react-native-elements';
import OrderDetails from '../screens/orderDetails';
import ItemList from "../screens/ItemList";
import Tracking from "../screens/tracking";
import Delivered from "../screens/delivered";
import SplashScreen from '../screens/splashScreen';
import Account from '../screens/account';
import OrderHistory from '../screens/orderHistory';
import ModalHeader from '../components/headers/modalHeader';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const bottomNavigation = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Order" component={OrderNavigation}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon type='octicon' name='package' />
                    )
                }} />
            <BottomTab.Screen name="OrderHistory" component={OrderHistory}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='history' />
                    )
                }} />
            <BottomTab.Screen name="Account" component={Account}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='account-box' />
                    )
                }} />
        </BottomTab.Navigator>
    )
}

const TopTapNavigation = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="orderInformation" component={OrderDetails} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    navigation.navigate(route.name)
                }
            })} />
            <TopTab.Screen name="itemsList" component={ItemList} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    navigation.navigate(route.name)
                }
            })} />
        </TopTab.Navigator>
    )
}

const OrderNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="availabilityScreen" component={Home} />
            <Stack.Screen name="orderListing" component={OrderListing} />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={bottomNavigation} />
            <Stack.Screen name="orderDetails" component={TopTapNavigation} />
            <Stack.Screen name="tracking" component={Tracking} />
            <Stack.Screen name="delivered" component={Delivered} />
        </Stack.Navigator>
    )
}

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }} >
            <Stack.Screen name="Login" component={Login} options={{
                header: ({ navigation }) => (
                    <ModalHeader navigation={navigation} title={'Login'} />
                )
            }} />
            <Stack.Screen name="Register" component={Register} options={{
                header: ({ navigation }) => (
                    <ModalHeader navigation={navigation} title={'Create an account'} />
                )
            }} />
        </Stack.Navigator >
    )

}

const navigator = () => {
    const linking = {
        prefixes: ['OnDemand://delivery', 'https://www.onDemand.com'],
        config: {
            screens: {
                availabilityScreen: 'home',
                Order: 'order',
                App: 'app'
            },
        },
    };
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="App" component={AppNavigation} />
                <Stack.Screen name="Auth" component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigator;