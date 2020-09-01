import React from 'react'
import { StyleSheet, View, Linking } from 'react-native'
import { Button } from "react-native-elements";
import OrderService from '../services/order-service';

const navigateBtn = (props) => {
    const startNavigation = () => {
        OrderService().getOrderData(props.orderId).then((result) => {
            let coordinates = JSON.parse(result.destination);
            const url = `google.navigation:q=${coordinates._latitude},${coordinates._longitude}`;
            const supported = Linking.canOpenURL(url);
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        })

    }

    return (
        <View>
            <Button
                buttonStyle={{ borderRadius: 0, marginVertical: 10, marginHorizontal: 20 }}
                title='navigate' onPress={() => startNavigation()} />
        </View>
    )
}

export default navigateBtn

const styles = StyleSheet.create({})
