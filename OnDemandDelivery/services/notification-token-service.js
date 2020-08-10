import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore';
import UserService from '../services/user-service';

const NotificationTokenService = () => {

    // Get the device token
    const getTokenAndStore = () => {
        messaging()
            .getToken()
            .then(token => {
                return saveTokenToDatabase(token);
            });
    }

    const saveTokenToDatabase = (token) => {
        // Assume user is already signed in
        const userId = firebase.auth().currentUser.uid;

        // Add the token to the users datastore
        return firestore()
            .collection('Riders')
            .doc(userId)
            .update({
                NotificationTokens: token,
            });
    }

    const sendResponseToBuyer = async (response, orderDetails) => {
        const URL = 'https://fcm.googleapis.com/fcm/send'

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAA3XEoy8g:APA91bEmvcXQWmQc0P_0soiyVPu5SDjLGDTy6gzToQxcyF5yXMEEiAzFArYTNJlYkOHiRKkc9GV1NKg9fjCl8EY9ZBBQrL_27368oblCJdej3zjxbJ960BAB2Gzumtt3F-WSgvI2GiR4'
        })

        var riderData = await UserService().getRiderData();

        const message = {
            to: orderDetails.token,
            data: {
                orderNumber: orderDetails.orderNumber,
                time: new Date().toLocaleTimeString(),
                response: response,
                buyerToken: orderDetails.token,
                riderToken: riderData.NotificationTokens,
                orderDetails: orderDetails
            },
            priority: 'high'
        }

        return await fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(message)
        })
    }

    return { getTokenAndStore, saveTokenToDatabase, sendResponseToBuyer }
}

export default NotificationTokenService

