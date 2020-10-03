import React from 'react'
import { StyleSheet, View, Linking, TouchableOpacity } from 'react-native'
import { Button, Image, Text } from "react-native-elements";
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
            <TouchableOpacity onPress={() => startNavigation()}  style={styles.navigateContainer}>
                <Image 
                    style={styles.imgNavigate}
                    source={require('../assets/Images/navigate.png')}
                />
                <Text style={styles.txtNavigate}>
                    Navigate
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default navigateBtn

const styles = StyleSheet.create({
    navigateContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtNavigate: {
        color: '#C75300',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 14,
    }
})
