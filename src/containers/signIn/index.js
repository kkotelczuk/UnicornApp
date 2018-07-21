/**
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';

import { Wrapper, SeparatorWord } from './styled';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SignIn extends Component<Props> {
  state = {
    email: '',
    password: '',
  }

  onSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Wrapper>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            type="text"
            label="Email"
            placeholder="Type your email"
            onChange={ email => this.setState({ email: email})}/>
          <TextInput
            type="password"
            label="Password"
            placeholder="Type your password"
            onChange={ password => this.setState({ password: password})}
          />
          <Button
            primary={true}
            name="Login"
            onPress={this.onSubmit}
          />
          <SeparatorWord>or</SeparatorWord>
          <Button
            outline={true}
            primary={false}
            name="Register"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </KeyboardAvoidingView>
      </Wrapper>
    );
  }
}
