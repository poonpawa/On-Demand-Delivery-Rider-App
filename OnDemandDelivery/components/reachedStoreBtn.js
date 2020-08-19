import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-elements";
import OrderService from '../services/order-service';

const reachedStoreBtn = (props) => {
    const [statusChanged, setStatusChanged] = useState(false)
    const changeRiderStatus = (orderId, atStore) => {
        if (atStore) {
            OrderService().updateData(orderId, 'riderStatus.status', 'Rider is at the store')
            setStatusChanged(true)
        } else {
            OrderService().updateData(orderId, 'riderStatus.status', 'Rider is on the way to your place')
            props.navigate('tracking', { orderId })
        }

    }

    return (
        <View>
            {!statusChanged ?
                <Button
                    buttonStyle={{ borderRadius: 0, marginVertical: 10 }}
                    title='Reached the Store' onPress={() => changeRiderStatus(props.orderId, 1)} />
                :
                <Button
                    buttonStyle={{ borderRadius: 0, marginVertical: 10 }}
                    title='On way to Destination' onPress={() => changeRiderStatus(props.orderId, 0)} />

            }
        </View>
    )
}

export default reachedStoreBtn

