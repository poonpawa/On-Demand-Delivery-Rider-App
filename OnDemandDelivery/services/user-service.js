import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore';
import React, { useState, useRef } from 'react'

const UserService = () => {
    const userId = firebase.auth().currentUser.uid;

    //for creating initial user entry
    const AddUserDetails = (userData) => {
        const { name, email } = userData;
        firestore().collection('Riders').doc(userId).set({
            Name: name,
            Email: email
        })
    }

    //for real time Riders location update
    const UpdateLocation = (value) => {
        const collRef = firestore().collection('Riders').doc(userId)

        collRef.update({
            Location: new firestore.GeoPoint(value.latitude, value.longitude)
        })
    }

    //To add values in Ridersnpm n collection
    const AddData = (key, value) => {
        if (value) {
            const dbReference = firestore().collection('Riders').doc(userId)

            let data = {}
            data[key] = value
            dbReference.update(data)
        }
    }

    return {
        AddUserDetails, UpdateLocation, AddData
    }
}

export default UserService