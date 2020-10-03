import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements';
import NotificationTokenService from '../services/notification-token-service';
import UserService from "../services/user-service";

export default function orderListing(props) {
    const [isOrderAccepted, setIsOrderAccepted] = useState(false)
    var details = {}
    const orderResponse = (response, orderDetails) => {
        NotificationTokenService().sendResponseToBuyer(response, orderDetails).then((res) => {
            if (res) {
                setIsOrderAccepted(true)
                console.log('order Accepted');
                UserService().AddData('orderID', props.route.params.payload.data.orderNumber);
            } else {
                console.log('order Rejected');
            }

        })
    }

    if (props.route.params) {
        let orderDetails = props.route.params.payload.data;
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Orders
                </Text>
                
                <View style={styles.EachOrderContainer}>
                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Order Id
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderDetails.orderNumber}
                        </Text>
                    </View>
                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Time
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderDetails.time}
                        </Text>
                    </View>
                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Person
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderDetails.number}
                        </Text>
                    </View>
                    <View style={styles.eachRow}>
                        <Text style={styles.leftList}>
                            Address
                        </Text>
                        <Text style={styles.leftRight}>
                            {orderDetails.buyer.address}
                        </Text>
                    </View>
                    
                    {!isOrderAccepted ?
                        <View style={styles.buttonAcceptReject}>
                            <TouchableOpacity onPress={() => orderResponse(0, orderDetails)} style={styles.btnReject}>
                                <Text style={styles.textReject}>
                                    Reject
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => orderResponse(1, orderDetails)} style={styles.btnAccept}>
                                <Text style={styles.textAccept}>
                                    Accept
                                </Text>
                            </TouchableOpacity>
                        </View> :
                        <View style={styles.buttonOrderDetailsContainer}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('orderDetails', {
                                    screen: 'orderInformation',
                                    params: {
                                        orderID: orderDetails.orderNumber
                                    }
                                })} style={styles.btnOrderDetails}>
                                <Text style={styles.textOrderDetails}>
                                    Order Details
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text h4>No New Order</Text>
                <Text>You will get a notification when a new order is received</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        paddingRight: 16,
        paddingLeft: 16
    },
    heading: {
        fontFamily: "NunitoSans-Bold",
        fontSize: 24,
        color: '#383F51',
        marginTop: 16,
    },
    EachOrderContainer: {
        borderColor: '#ECECF6',
        borderWidth: 1,   
        marginTop: 16,
        borderRadius: 4
    },
    eachRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16
    },
    leftList: {
        color: '#6A748A',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
        width: 100,
    },
    rightList: {
        color: '#383F51',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    },
    buttonAcceptReject: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16
    },
    btnAccept: {
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        backgroundColor: '#C75300',
        borderBottomRightRadius: 4
    },
    textAccept: {
        textAlign: 'center',
        color: 'white',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    },
    btnReject: {
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        backgroundColor: '#EECBB3',
        borderBottomLeftRadius: 4
    },
    textReject: {
        textAlign: 'center',
        color: '#C75300',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    },
    buttonOrderDetailsContainer: {
        marginTop: 16
    },
    btnOrderDetails: {
        height: 40,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#C75300',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    textOrderDetails: {
        textAlign: 'center',
        color: 'white',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    }
})
