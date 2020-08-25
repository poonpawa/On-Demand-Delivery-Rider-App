import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from "react-native-elements";
import OrderService from '../services/order-service';
import UserService from "../services/user-service";
import MapView, { Marker } from 'react-native-maps';

const tracking = (props) => {
    const [orderData, setorderData] = useState()
    const [RiderLocation, setRiderLocation] = useState(null)
    let orderId = props.route.params.orderId;
    useEffect(() => {
        OrderService().getOrderData(orderId).then((response) => {
            setorderData(response)
        })

        UserService().getValue('Location').then((data) => {
            setRiderLocation(data)
            console.log(RiderLocation)
        })
    }, [])



    const orderDelivered = (orderId) => {
        OrderService().updateData(orderId, 'riderStatus.status', 'Order Delivered')
        props.navigation.navigate('delivered')
    }

    return (
        <View>
            <Text>Order ID:{orderId}</Text>
            {orderData ?
                <View>
                    <Text>Address: {orderData.shippingAddress}</Text>
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                                title="buyer"
                                image={require('../assets/Icons/BM.png')}
                            />
                        </MapView>
                    </View>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginVertical: 10, marginHorizontal: 20 }}
                        title='Order Delivered' onPress={() => orderDelivered(orderId)} />
                </View> : null
            }
        </View>
    )
}

export default tracking

const styles = StyleSheet.create({
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 650,
        width: 450,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
