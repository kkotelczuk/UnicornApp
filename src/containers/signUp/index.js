/**
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';

import { Wrapper, SeparatorWord } from './styled';

import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition';

type UserT = {
  email: string,
  password: string,
  name: string,
};

type Props = {
  navigation: NavigationScreenProp<any>,
};
export default class SignUp extends Component<Props> {
  state = {
    email: '',
    password: '',
    name: '',
    isValid: false,
    errors: {}
  };

  saveUser = async (user: Object<UserT>) => {
    const userArray = [];

    for (let element in user) {
      userArray.push([`@UnicornAppStore:user:${element}`, user[element]])
    }

    userArray.push(['@UnicornAppStore:user:isAuthenticated', 'yes']);

    try {
      await AsyncStorage.multiSet(userArray);
    } catch (error) {
      console.error(error);
    }
  }

  validateForm = () => {
    const { password, email, name } = this.state;
    const errors = {}
    const isPasswordValid = /^[0-9a-zA-Z]{6,}$/.test(password);
    const isEmailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const isNameValid =  /^[A-Za-z]+$/.test(name);
    const isFormValid = isPasswordValid && isEmailValid && isNameValid;

    if (!isPasswordValid && password.length > 0) { errors.password = `Password must contain minimum 6 of letters or number.`; }
    if (!isEmailValid && email.length > 0) { errors.email = `${email} is not a valid email.`; }
    if (!isNameValid && name.length > 0) { errors.name = `${name} can contain only letters.`; }

    this.setState({
      errors,
      isValid: isFormValid,
    })
  }

  onSubmit = async () => {
    const { errors, isValid, ...user } = this.state;

    this.saveUser(user).then(() => this.props.navigation.navigate('Dashboard'));
  }

  render() {
    return (
      <Wrapper>
        <TextInput
          type="text"
          label="Email"
          placeholder="Type email"
          onChange={ email => this.setState({ email: email})}
          error={this.state.errors.email}
          onEndEditing={this.validateForm}
        />
        <TextInput
          type="password"
          label="Password"
          placeholder="Type password"
          onChange={ password => this.setState({ password: password})}
          error={this.state.errors.password}
          onEndEditing={this.validateForm}
        />
        <TextInput
          type="text"
          label="Name"
          placeholder="Type your name"
          onChange={ name => this.setState({ name: name})}
          error={this.state.errors.name}
          onEndEditing={this.validateForm}
        />
        <Button
          primary={true}
          name="Register"
          onPress={this.onSubmit}
          disabled={!this.state.isValid}
        />
        <SeparatorWord>or</SeparatorWord>
        <Button
          outline={true}
          name="Login"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </Wrapper>
    );
  }
}
