import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OrderService from '../services/order-service'

const tracking = (props) => {
    const [orderData, setorderData] = useState()
    let orderId = props.route.params.orderId;
    useEffect(() => {
        OrderService().getOrderData(orderId).then((response) => {
            setorderData(response)
        })
    }, [])

    return (
        <View>
            <Text>Order ID:{orderId}</Text>
            {orderData ?
                <View>
                    <Text>Address: {orderData.shippingAddress}</Text>
                </View> : null
            }

        </View>
    )
}

export default tracking

const styles = StyleSheet.create({})
