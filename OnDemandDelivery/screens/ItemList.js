import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from "react-native-elements";
import ReachedStoreBtn from "../components/reachedStoreBtn";
import UserService from '../services/user-service';
import OrderService from '../services/order-service';

const ItemList = ({ navigation }) => {
    const [productData, setProductData] = useState([])
    useEffect(() => {
        UserService().getValue('orderID').then((id) => {
            OrderService().getOrderData(id).then((data) => {
                console.log('productDat' + data);
                setProductData(data);
            })
        })
    }, [])

    return (
        <View style={styles.container}>
            {
                productData.products && productData.products.map((prop, key) => {
                    {
                        return (
                            < View >
                                <ListItem
                                    key={prop.ProductId}
                                    // leftAvatar={{ source: { uri: prop.avatar_url } }}
                                    title={prop.ProductName}
                                    subtitle={prop.quantity + ' X ' + prop.Quantity}
                                    rightSubtitle={prop.Price}
                                    bottomDivider
                                />
                            </View>
                        )
                    }
                })
            }
            <Text>Total Price: {productData.totalPrice}</Text>
            <ReachedStoreBtn orderId={productData.id} navigate={navigation.navigate} />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
})

export default ItemList
