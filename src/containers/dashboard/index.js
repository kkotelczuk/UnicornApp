import React, { Component } from 'react';
import {Platform, View, AsyncStorage, Animated, Dimensions, Easing, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import nodeEmoji from 'node-emoji';
import Sound from 'react-native-sound';

import { Button } from '../../components/Button';
import { Title, Unicorn, Wrapper, Separator} from './styled';

export default class Dashboard extends Component {
  state = {
    userName: '',
    isPlaying: false,
    isSongReady: false,
    isPaused: false,
    screenWidth: 0,
  };
  unicorn = nodeEmoji.get('unicorn_face');
  unicornSong = {};
  animatedValue = new Animated.Value(0)

  async componentDidMount() {
    const userName = await AsyncStorage.getItem('@UnicornAppStore:user:name');
    const {width} = Dimensions.get('window');

    await this.loadSound();
    Sound.setCategory('Playback', true);
    this.setState({ userName, screenWidth: width });
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,

      }
    ).start(() => {
      if(this.state.isPlaying) {this.animate()} })
  }


  loadSound = async () => {
    this.unicornSong = new Sound('unicorns.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return false;
      }
      this.setState({ isSongReady: true });
    });
  }

  playSound = () => {
    this.unicornSong.play((success) => {
      if(success) {
        Platform.OS === 'ios' && this.playSound
      } else{
        this.unicornSong.reset()
      }
    })
    this.setState({isPlaying: true, isPaused: false}, () => this.animate());
  }

  pauseSound = () => {
    this.unicornSong.pause();
    this.setState({isPaused : true})
  }

  stopSound = () => {
    this.unicornSong.stop(() => this.setState({ isPlaying: false }, () => {
      this.animatedValue.setValue(1)
      Animated.timing(this.animatedValue).stop()
    }))
  }

  logout = async () => {
    await AsyncStorage.removeItem('@UnicornAppStore:user:isAuthenticated');
    Alert.alert(
      'Good Bye',
      'You got logged out!',
      [
        {text: 'OK', onPress: () => this.props.navigation.navigate('SignIn')},
      ],
      { cancelable: false }
    );
  }

  render() {
    console.log(this.state)
    const { userName, isPaused, isPlaying, isSongReady } = this.state;
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.screenWidth, -this.state.screenWidth / 2]
    })
    return (
      <Wrapper>
        <Title>Welcome {userName} to <Unicorn>{this.unicorn}</Unicorn> paradise!</Title>

        <Button
            onPress={(isPaused || !isPlaying) ? this.playSound : this.pauseSound}
            disabled={!isSongReady}
            icon={<Icon name={(isPaused || !isPlaying) ? 'ios-play' : 'ios-pause'} size={30} />}
          />
          <Button
            onPress={this.stopSound}
            disabled={(!isSongReady || !isPlaying)}
            icon={<Icon name="ios-square" size={30} />}
          />
          <Separator />
          <Animated.View
            style={{
              marginLeft,
              flexDirection: 'row',
            }}
          >
            <Unicorn>{this.unicorn}</Unicorn>
            <Unicorn>{this.unicorn}</Unicorn>
            <Unicorn>{this.unicorn}</Unicorn>
          </Animated.View>

        <Button
            outline={true}
            name="Logout"
            onPress={this.logout}
          />
      </Wrapper>
    );
  }
}
