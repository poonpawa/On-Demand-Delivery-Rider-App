import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from "react-native-elements";
import ReachedStoreBtn from "../components/reachedStoreBtn";
import OrderService from '../services/order-service';
import NavigateBtn from "../components/navigateBtn";

const orderDetails = ({ navigation, route }) => {
    const [orderData, setorderData] = useState(null)
    const id = route.params.orderID;
    useEffect(() => {
        OrderService().getOrderData(id).then((data) => {
            setorderData(data);
        })

    }, [])

    return (
        <View style={{ margin: 20 }}>
            {orderData ?
                <View>
                    <Text>{orderData.id}</Text>
                    <Text>Time: {orderData.riderStatus.timeUpdated}</Text>
                    <Text>Address: {orderData.shippingAddress} </Text>
                    <NavigateBtn orderId={orderData.id} />
                    <Text>Store: {orderData.store}</Text>
                    <Text>Contact: {orderData.id}</Text>
                    <ReachedStoreBtn orderId={orderData.id} navigate={navigation.navigate} />
                </View>
                : null}
        </View>
    )
}

export default orderDetails
