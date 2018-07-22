/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Text } from './styled';
import {Button} from '../../components/Button';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Dashboard extends Component<Props> {

  logout = async () => {
    await AsyncStorage.removeItem('@UnicornAppStore:user:isAuthenticated');
    this.props.navigation.navigate('SignIn');
  }

  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
        <Text>{instructions}</Text>
        <Button
            outline={true}
            primary={false}
            name="Logout"
            onPress={this.logout}
          />
      </View>
    );
  }
}
