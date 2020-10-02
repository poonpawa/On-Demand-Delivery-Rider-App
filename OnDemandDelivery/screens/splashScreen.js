import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';

const splashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.splashImage}
                source={require('../assets/Images/splash-logo.png')} />
            
            <Image 
                style={styles.splashTitle}
                source={require('../assets/Images/FreshMart.png')} />
            
            <Text style={styles.desc}>Deliver fresh groceries and earn</Text>  

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'Login'})} style={styles.secondarybtn}>
                    <Text style={styles.textLogin}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'Register'})} style={styles.primarybtn}>
                    <Text style={styles.textSignUp}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>    
        </View>
    )
}

export default splashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C75300',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "NunitoSans-Bold"
    },
    splashImage: {
        display: 'flex',
        alignItems: 'center'
    },
    splashTitle: {
        marginTop: -60,
    },
    desc: {
        textAlign: 'center', 
        color: 'white', 
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 18,
        marginTop: 16 
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16
    },
    secondarybtn: {
        flex: 1,
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'transparent',
        fontSize: 16,
        marginRight: 8,
        height: 40,
        justifyContent: 'center',
    },
    primarybtn: {
        flex: 1,
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        fontSize: 16,
        marginLeft: 8,
        height: 40,
        justifyContent: 'center',
    },
    textLogin: {
        textAlign: 'center',
        color: 'white',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    },
    textSignUp: {
        textAlign: 'center',
        color: '#C75300',
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 16,
    }
})
