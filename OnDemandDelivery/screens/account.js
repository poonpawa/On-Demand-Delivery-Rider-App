import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

const account = (props) => {

    const signOut = (navigate) => {
        auth().signOut()
            .then(() => {
                console.log('User signed out!')
                navigate('Auth')
            });
    }

    return (
        <View>
            <Text h4>Account</Text>

            <ListItem
                title={'Logout'}
                onPress={() => { signOut(props.navigation.navigate) }}
                bottomDivider
                chevron
            />
        </View>
    )
}

export default account

const styles = StyleSheet.create({})
