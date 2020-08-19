import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from "react-native-elements";
import OrderService from '../services/order-service'

const tracking = (props) => {
    const [orderData, setorderData] = useState()
    let orderId = props.route.params.orderId;
    useEffect(() => {
        OrderService().getOrderData(orderId).then((response) => {
            setorderData(response)
        })
    }, [])

    const orderDelivered = (orderId) => {
        OrderService().updateData(orderId, 'riderStatus.status', 'Order Delivered')
        props.navigation.navigate('delivered')
    }

    return (
        <View>
            <Text>Order ID:{orderId}</Text>
            {orderData ?
                <View>
                    <Text>Address: {orderData.shippingAddress}</Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginVertical: 10 }}
                        title='Order Delivered' onPress={() => orderDelivered(orderId)} />
                </View> : null
            }
        </View>
    )
}

export default tracking

const styles = StyleSheet.create({})
