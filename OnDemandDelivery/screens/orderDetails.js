import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from "react-native-elements";
import ReachedStoreBtn from "../components/reachedStoreBtn";
import OrderService from '../services/order-service';

const orderDetails = ({ navigation, route }) => {
    const [orderData, setorderData] = useState(null)
    const id = route.params.orderID;
    useEffect(() => {
        OrderService().getOrderData(id).then((data) => {
            setorderData(data);
            console.log(data);
        })

    }, [])

    return (

        <View style={{ margin: 20 }}>
            {orderData ?
                <View>
                    < Text > Order Id: {orderData.id}</Text >
                    <Text>Time: {orderData.riderStatus.timeUpdated}</Text>
                    <Text>Address: {orderData.shippingAddress} </Text>
                    <Text>Store: {orderData.store}</Text>
                    <Text>Contact: {orderData.id}</Text>
                    <ReachedStoreBtn />
                </View >
                : null}
        </View>



    )
}

export default orderDetails
