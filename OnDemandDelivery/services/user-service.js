import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore';
import React, { useState, useRef } from 'react'

const UserService = () => {
    //getting the Rider collection DB reference
    const getRiderDBReference = () => {
        const userId = firebase.auth().currentUser.uid;
        return firestore().collection('Riders').doc(userId)
    }

    //for creating initial user entry
    const AddUserDetails = (userData) => {
        const { name, email } = userData;
        getRiderDBReference().set({
            Name: name,
            Email: email,
            IsAvailable: false
        })
    }

    //for real time Riders location update
    const UpdateLocation = (value) => {

        getRiderDBReference().update({
            Location: new firestore.GeoPoint(value.latitude, value.longitude)
        })
    }

    //To add values in Ridersnpm n collection
    const AddData = (key, value) => {
        if (value) {
            let data = {}
            data[key] = value
            getRiderDBReference().update(data)
        }
    }

    const SetAvailability = (value) => {
        getRiderDBReference().update({
            IsAvailable: value
        })
    }

    const getValue = async (key) => {
        let dbValue;
        await getRiderDBReference().get().then((doc) => {
            dbValue = doc.data()[key];
        })
        return dbValue;
    }

    return {
        AddUserDetails, UpdateLocation, AddData, SetAvailability, getValue
    }
}

export default UserService