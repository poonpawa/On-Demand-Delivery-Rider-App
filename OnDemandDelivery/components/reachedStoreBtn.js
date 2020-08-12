import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';

export class reachedStoreBtn extends Component {
    render() {
        return (
            <View>
                <Button
                    buttonStyle={{ borderRadius: 0, marginVertical: 10 }}
                    title='Reached the Store' onPress={() => notifyBuyer()} />
            </View>
        )
    }
}

export default reachedStoreBtn
