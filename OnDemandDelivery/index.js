/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        return Promise.reject();
    }
    return <App />
}

//AppRegistry.registerHeadlessTask('ReactNativeFirebaseMessagingHeadlessTask', () => HeadlessCheck)
AppRegistry.registerComponent(appName, () => HeadlessCheck);


