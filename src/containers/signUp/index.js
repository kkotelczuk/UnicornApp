/**
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';

import { Wrapper, SeparatorWord } from './styled';

type Props = {};
export default class SignUp extends Component<Props> {
  state = {
    email: '',
    password: '',
    name: '',
    isValid: false,
    errors: {}
  };

  validateForm = () => {
    const { password, email, name } = this.state;
    const errors = {}
    const isPasswordValid = /^[0-9a-zA-Z]{6,}$/.test(password);
    const isEmailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const isNameValid =  /^[A-Za-z]+$/.test(name);
    console.log('is', isNameValid)
    const isFormValid = isPasswordValid && isEmailValid && isNameValid;

    if (!isPasswordValid && password.length > 0) { errors.password = `Password must contain minimum 6 of letters or number.`; }
    if (!isEmailValid && email.length > 0) { errors.email = `${email} is not a valid email.`; }
    if (!isNameValid && name.length > 0) { errors.name = `${name} can contain only letters.`; }

    this.setState({
      errors,
      isValid: isFormValid,
    })
  }

  onSubmit = () => {
    console.log(this.state)
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
