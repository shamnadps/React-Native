import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './Homescreen';
import DetailsScreen from './DetailScreen';
import SettingScreen from './SettingScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const BottomStack = createBottomTabNavigator({
  Home: createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  ),
  Settings: createStackNavigator(
    {
      Settings: SettingScreen,
    },
    {
      initialRouteName: 'Settings',
    }
  ),
});

export default class App extends React.Component {
  render() {
    return <BottomStack />;
  }
};