import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, Icon } from 'react-native-elements';
import NotificationTokenService from '../services/notification-token-service';
import UserService from "../services/user-service";

export default function orderListing(props) {
    const [isOrderAccepted, setIsOrderAccepted] = useState(false)
    var details = {}
    const orderResponse = (response, orderDetails) => {
        NotificationTokenService().sendResponseToBuyer(response, orderDetails).then((res) => {
            if (res) {
                setIsOrderAccepted(true)
                console.log('order Accepted');
                UserService().AddData('orderID', props.route.params.payload.data.orderNumber);
            } else {
                console.log('order Rejected');
            }

        })
    }

    if (props.route.params) {
        let orderDetails = props.route.params.payload.data;
        return (
            <View>
                <Card title='Order Details'>
                    <Text style={{ marginBottom: 10 }}>
                        Order Id : {orderDetails.orderNumber}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Time : {orderDetails.time}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>Person : {orderDetails.number}</Text>
                    <Text style={{ marginBottom: 10 }}>Address : {orderDetails.buyer.address}</Text>
                    <Text style={{ marginBottom: 10 }}>Store : {orderDetails.store}</Text>
                    {!isOrderAccepted ?
                        <View>
                            <Button
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Accept' onPress={() => orderResponse(1, orderDetails)} />
                            <Button
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Reject' onPress={() => orderResponse(0, orderDetails)} />
                        </View> :
                        <View>
                            <Button
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='OrderDetails' onPress={() => props.navigation.navigate('orderDetails', {
                                    screen: 'orderInformation',
                                    params: {
                                        orderID: orderDetails.orderNumber
                                    }
                                })} />
                        </View>
                    }

                </Card>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text h4>No New Order</Text>
                <Text>You will get a notification when a new order is received</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
