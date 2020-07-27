import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text, Icon } from 'react-native-elements';

export default function orderListing({ navigation }) {
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
}

const styles = StyleSheet.create({})
