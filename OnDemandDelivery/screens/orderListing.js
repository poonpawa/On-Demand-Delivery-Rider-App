import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, Icon } from 'react-native-elements';

export default function orderListing({ navigation }) {
    if (navigation.state) {
        let orderDetails = navigation.state.params.payload.data;
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
                    <Text style={{ marginBottom: 10 }}>Address : {orderDetails.address}</Text>
                    <Text style={{ marginBottom: 10 }}>Store : {orderDetails.store}</Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Accept' />
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Reject' />
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
