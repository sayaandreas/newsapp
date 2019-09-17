import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import store from './store';
import routes from './routes';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileLandingScreen from './screens/ProfileLandingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const HomeTab = createStackNavigator({
  [routes.HomeScreen]: {
    screen: HomeScreen,
  },
  [routes.NewsDetailScreen]: {
    screen: NewsDetailScreen,
  },
});

const ExploreTab = createStackNavigator({
  [routes.ExploreScreen]: {
    screen: ExploreScreen,
  },
  [routes.NewsDetailScreen]: {
    screen: NewsDetailScreen,
  },
});

const AuthStack = createStackNavigator({
  [routes.ProfileLandingScreen]: {
    screen: ProfileLandingScreen,
  },
  [routes.RegisterScreen]: {
    screen: RegisterScreen,
  },
  [routes.LoginScreen]: {
    screen: LoginScreen,
  },
});

const userId = store.getState().auth.userId;
console.log(userId);
const ProfileTab = createSwitchNavigator(
  {
    [routes.AuthStack]: {
      screen: AuthStack,
    },
    [routes.ProfileScreen]: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: userId ? routes.ProfileScreen : routes.AuthStack,
  },
);

const MainStack = createBottomTabNavigator(
  {
    HomeTab: {
      navigationOptions: {
        tabBarIcon: ({
          tintColor,
          focused,
        }: {
          tintColor: string,
          focused: boolean,
        }) => (
          <MaterialIcons
            name={focused ? 'home' : 'home'}
            size={26}
            style={{color: tintColor}}
          />
        ),
        tabBarLabel: 'Home',
      },
      screen: HomeTab,
    },
    ExploreTab: {
      screen: ExploreTab,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({
          tintColor,
          focused,
        }: {
          tintColor: string,
          focused: boolean,
        }) => (
          <MaterialIcons
            name={focused ? 'explore' : 'explore'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    ProfileTab: {
      screen: ProfileTab,
      //   path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({
          tintColor,
          focused,
        }: {
          tintColor: string,
          focused: boolean,
        }) => (
          <MaterialIcons
            name={focused ? 'account-circle' : 'account-circle'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
    },
  },
);

const RootStack = createAppContainer(
  createSwitchNavigator({
    [routes.SplashScreen]: {screen: SplashScreen},
    [routes.MainStack]: {screen: MainStack},
  }),
);

export default RootStack;
