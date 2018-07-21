/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Text } from './styled';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Dashboard extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
        <Text>{instructions}</Text>
      </View>
    );
  }
}
