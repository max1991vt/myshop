import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Navigator} from './src/routes';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import PushNotification from 'react-native-push-notification';

// var PushNotification = require('react-native-firebase-push-notifications');
import Firebase from '@react-native-firebase/app';

export default class App extends Component {
  componentDidMount() {
    Firebase.initializeApp(this);
    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
    // console.log(Firebase.app);
    // if (!Firebase.apps.length) {
    //   Firebase.initializeApp({
    //     clientId:
    //       '471295044816-bmk49br61993qfdfop1tl6pial41133b.apps.googleusercontent.com',
    //     appId: '1:471295044816:android:e96b5dec9e1159c83642d5',
    //     apiKey: 'AIzaSyAAt57E4LegIESuYJj-GgL1RCo1ckpdeg8',
    //     databaseURL: 'https://myshop-da7e8.firebaseio.com/',
    //     storageBucket: 'myshop-da7e8.appspot.com',
    //     messagingSenderId: '471295044816',
    //     projectId: 'myshop-da7e8',
    //     persistence: true,
    //   });
    // }
  }
  render() {
    return (
      <Provider style={styles.container} store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
