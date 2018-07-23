import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
} from 'react-native';

export default class AuthLoading extends React.Component {
  
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const isAuthenticated = await AsyncStorage.getItem('@UnicornAppStore:user:isAuthenticated');
    const isRegistered = await AsyncStorage.getItem('@UnicornAppStore:user:name');
    if (isRegistered && !isAuthenticated) {
      this.props.navigation.navigate('SignIn');
    } else {
      this.props.navigation.navigate(isAuthenticated ? 'App' : 'Auth');
    }
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}
