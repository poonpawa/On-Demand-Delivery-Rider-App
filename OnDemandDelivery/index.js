/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import React from 'react';

messaging().setBackgroundMessageHandler((app) => {
    console.log('App Opened. ', app);
});

messaging()
    .getInitialNotification().then((res) => {
        console.log('got notified', res);
    })

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        return Promise.reject();
    }
    return <App />
}

//AppRegistry.registerHeadlessTask('ReactNativeFirebaseMessagingHeadlessTask', () => HeadlessCheck)
AppRegistry.registerComponent(appName, () => HeadlessCheck);


