/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import First from './app/scenes/First';
import Second from './app/scenes/Second';
import TextScene from './app/scenes/TextScene';
import VideoScene from './app/scenes/VideoScene';

const AppNavigator = createStackNavigator(
  {
    First: First,
    Second: Second,
    TextScene: TextScene,
    VideoScene: VideoScene,
  },
  {
    initialRouteName: 'First',
    defaultNavigationOptions: {
      title: 'Balance',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);
export default createAppContainer(AppNavigator);