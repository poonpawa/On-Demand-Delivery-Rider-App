import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from "react-native-elements";
import ReachedStoreBtn from "../components/reachedStoreBtn";
import OrderService from '../services/order-service';
import NavigateBtn from "../components/navigateBtn";

const orderDetails = ({ navigation, route }) => {
    const [orderData, setorderData] = useState(null)
    const id = route.params.orderID;
    useEffect(() => {
        OrderService().getOrderData(id).then((data) => {
            setorderData(data);
        })

    }, [])

    return (
        <View style={styles.container}>
            {orderData ?
                <View style={styles.orderDetails}>
                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Order Id
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderData.id}
                        </Text>
                    </View>

                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Order Time
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderData.riderStatus.timeUpdated}
                        </Text>
                    </View>

                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Address
                        </Text>
                        <View style={styles.leftRight}>
                            <Text>
                                {orderData.shippingAddress}
                            </Text>
                            <NavigateBtn orderId={orderData.id} />        
                        </View>
                    </View>

                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Store
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderData.store}
                        </Text>
                    </View>

                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Contact
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderData.id}
                        </Text>
                    </View>

                    <ReachedStoreBtn orderId={orderData.id} navigate={navigation.navigate} style={styles.reachedBtn}/>
                </View>
                : null}
        </View>
    )
}

export default orderDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        paddingRight: 16,
        paddingLeft: 16
    },
    reachedBtn: {
        position: 'absolute',
        bottom: 40
    },
    eachRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center'
    },
    leftList: {
        color: '#6A748A',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
        width: 120,
    },
    rightList: {
        color: '#383F51',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    },
})
