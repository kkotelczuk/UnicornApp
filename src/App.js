/**
 * @flow
 */

import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { SafeAreaView } from 'react-native';

import Dashboard from './containers/dashboard';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import AuthLoading from './NavigationContainer';

const AppStack = createStackNavigator({
  Dashboard: Dashboard,
},
{
  navigationOptions: {
    header: null,
  }
}
);
const AuthStack = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
},
{
  initialRouteName: 'SignUp',
  navigationOptions: {
    header: null,
  }
});

const Root = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Root />
      </SafeAreaView>
    )
  }
}
