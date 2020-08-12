import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReachedStoreBtn from "../components/reachedStoreBtn";

const ItemList = ({ navigation }) => {

    return (
        <View>
            <Text>ItemList</Text>
            <ReachedStoreBtn />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({})
