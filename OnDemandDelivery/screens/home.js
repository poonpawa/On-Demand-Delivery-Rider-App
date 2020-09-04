import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import firebase from '@react-native-firebase/app';
import Geolocation from "../components/geolocation";
import NotificationTokenService from "../services/notification-token-service";
import AvailabilitySwitch from "../components/availaibilitySwitch";
import messaging from '@react-native-firebase/messaging';

const home = (props) => {
    let useObj = {}
    const { navigate } = props.navigation;
    const displayName = firebase.auth().currentUser.displayName;

    useEffect(() => {
        //get Token for every logged-in user & store in db
        NotificationTokenService().getTokenAndStore()
        messaging().onMessage((payload) => {
            navigate('orderListing', { payload })
        });
    }, [])

    return (
        <View style={styles.container}>
            <Text h2>Rider's App</Text>
            <Text style={{ fontSize: 25 }}>Welcome <Text style={{ color: "#C75300", fontWeight: "bold" }}>{displayName}</Text></Text>
            <Geolocation />
            <AvailabilitySwitch />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },
    btn: {
        width: 100,
        backgroundColor: "#C75300",
        marginTop: 40
    }
})

export default home
