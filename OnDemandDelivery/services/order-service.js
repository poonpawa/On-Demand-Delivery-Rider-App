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

    return {
        getOrderData
    }
}

export default OrderService
