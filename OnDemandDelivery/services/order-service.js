import React from 'react'
import firestore from '@react-native-firebase/firestore'

const OrderService = () => {
    const getOrderData = async (id) => {
        let data;
        await firestore().collection('Orders').doc(id).get().then((doc) => {
            data = doc.data();
        })
        return data;

    }

    //To update values in  order collection
    const updateData = (orderId, key, value) => {
        if (value) {
            let data = {}
            data[key] = value
            firestore().collection('Orders').doc(orderId).update(data)
        }
    }

    return {
        getOrderData, updateData
    }
}

export default OrderService
