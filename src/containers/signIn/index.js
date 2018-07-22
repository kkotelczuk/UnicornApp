/**
 * @flow
 */

import React, {Component} from 'react';
import { KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { Banner } from '../../components/Banner';

import { Wrapper, SeparatorWord } from './styled';

type Props = {};
export default class SignIn extends Component<Props> {
  state = {
    email: '',
    password: '',
    errors: {},
    areCredentialsCorrect: undefined,
  }

  onSubmit = async () => {
    const { password, email } = this.state;
    const errors = {};
    if (password.length <= 0) { errors.password = `Password is required`; }
    if (email.length <= 0) { errors.email = `Email is required`; }

    if (errors.password || errors.email) {
      this.setState({ errors });
      return;
    }

    const storedEmail = await AsyncStorage.getItem('@UnicornAppStore:user:email');
    const storedPassword = await AsyncStorage.getItem('@UnicornAppStore:user:password');
    const areCredentialsCorrect = storedEmail === email && storedPassword === password;

    this.setState({ areCredentialsCorrect });

    if (areCredentialsCorrect) {
      await AsyncStorage.setItem('@UnicornAppStore:user:isAuthenticated', 'yes');
      this.props.navigation.navigate('Dashboard');
    }
  }

  render() {
    return (
      <Wrapper>
        <KeyboardAvoidingView behavior="padding" enabled>
          {this.state.areCredentialsCorrect !== undefined &&
            <Banner
              isSuccess={this.state.areCredentialsCorrect}
              errorMessage="Email or password is wrong, please try again or register"
              successMessage="You have logIn successfully"
            />
          }
          <TextInput
            type="text"
            label="Email"
            placeholder="Type your email"
            onChange={ email => this.setState({ email: email})}
            error={this.state.errors.email}
            />
          <TextInput
            type="password"
            label="Password"
            placeholder="Type your password"
            onChange={ password => this.setState({ password: password})}
            error={this.state.errors.password}
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
