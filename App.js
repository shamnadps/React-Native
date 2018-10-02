import React from 'react';
import { View, Text, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './Homescreen';
import DetailsScreen from './DetailScreen';
import SettingScreen from './SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';

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
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = Platform.OS === 'ios' ? `md-information-circle-outline` : 'info-circle';
        } else if (routeName === 'Settings') {
          iconName = Platform.OS === 'ios' ? `md-settings` : 'gear';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return Platform.OS === 'ios' ? <Ionicons name={iconName} size={25} color={tintColor} /> : < Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }

);

export default class App extends React.Component {
  render() {
    return <BottomStack />;
  }
};