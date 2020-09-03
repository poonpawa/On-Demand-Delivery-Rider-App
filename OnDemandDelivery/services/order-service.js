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

    const getAllOrders = async (riderId) => {
        let allOrders = [];
        await firestore().collection('Orders').where('riderId', '==', riderId).get().then((doc) => {
            doc.forEach(item => {
                allOrders.push(item.data())
            });
        })
        return allOrders
    }

    return {
        getOrderData, updateData, getAllOrders
    }
}

export default OrderService
