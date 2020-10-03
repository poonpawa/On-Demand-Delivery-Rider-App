import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
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
        <View style={styles.container}>
            {!statusChanged ?
                <TouchableOpacity onPress={() => changeRiderStatus(props.orderId, 1)} style={styles.btnReachedStore}>
                    <Text style={styles.textReachedStore}>
                        Reached the store
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => changeRiderStatus(props.orderId, 0)} style={styles.btnOnWay}>
                    <Text style={styles.textOnWay}>
                        On way to Destination
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default reachedStoreBtn

const styles = StyleSheet.create({
    btnOnWay: {
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        backgroundColor: '#C75300',
        borderRadius: 4,
    },
    btnReachedStore: {
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        backgroundColor: '#C75300',
        borderRadius: 4,
    },
    textOnWay: {
        textAlign: 'center',
        color: 'white',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    },
    textReachedStore: {
        textAlign: 'center',
        color: 'white',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    }
})
