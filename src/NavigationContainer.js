import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

export default class AuthLoading extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const isAuthenticated = await AsyncStorage.getItem('@UnicornAppStore:user:isAuthenticated');
    const isRegistered = await AsyncStorage.getItem('@UnicornAppStore:user:name');
    if (isRegistered && !isAuthenticated) {
      this.props.navigation.navigate('SignIn');
    } else {
      this.props.navigation.navigate(isAuthenticated ? 'App' : 'Auth');
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
