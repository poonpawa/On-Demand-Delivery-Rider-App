import React from 'react'
import { StyleSheet, View, Linking } from 'react-native'
import { Button } from "react-native-elements";

const navigateBtn = () => {
    const startNavigation = async () => {
        const url = 'google.navigation:q=53.395529999999994,-6.185311666666666';
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }

    return (
        <View>
            <Button
                buttonStyle={{ borderRadius: 0, marginVertical: 10, marginHorizontal: 20 }}
                title='navigate' onPress={() => startNavigation()} />
        </View>
    )
}

export default navigateBtn

const styles = StyleSheet.create({})
