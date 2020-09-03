import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import OrderService from '../services/order-service'
import firebase from "@react-native-firebase/app"
import { ListItem, Button, Text } from 'react-native-elements'

const orderHistory = (props) => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const userId = firebase.auth().currentUser.uid;
        OrderService().getAllOrders(userId).then((data) => {
            setOrders(data)
        })
    })


    return (
        <ScrollView>

            <Text h4>Previous Orders</Text>
            <View>
                {
                    orders.map((item, key) => (
                        <ListItem key={key}
                            title={'Order Id: ' + item.id}
                            subtitle={'Store: ' + item.store + '\nAmount Paid : €' + item.totalPrice}
                            rightSubtitle={<Button title='View Details' />}
                            bottomDivider />
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

export default orderHistory
