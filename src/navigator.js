import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import routes from './routes';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import ExploreScreen from './screens/ExploreScreen';
// import ProfileLandingScreen from './screens/ProfileLandingScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import LoginScreen from './screens/LoginScreen';
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

// const AuthStack = createStackNavigator({
//   [routes.ProfileLandingScreen]: {
//     screen: ProfileLandingScreen,
//   },
//   [routes.RegisterScreen]: {
//     screen: RegisterScreen,
//   },
//   [routes.LoginScreen]: {
//     screen: LoginScreen,
//   },
// });

const ProfileTab = createSwitchNavigator({
  //   [routes.AuthStack]: {
  //     screen: AuthStack,
  //   },
  [routes.ProfileScreen]: {
    screen: ProfileScreen,
  },
});

const MainStack = createBottomTabNavigator(
  {
    HomeTab: {
      navigationOptions: {
        //     tabBarIcon: ({
        //       tintColor,
        //       focused,
        //     }: {
        //       tintColor: string,
        //       focused: boolean,
        //     }) => (
        //       <Ionicons
        //         name={focused ? 'ios-home' : 'ios-home'}
        //         size={26}
        //         style={{color: tintColor}}
        //       />
        //     ),
        tabBarLabel: 'Home',
      },
      //   path: '/',
      screen: HomeTab,
    },
    ExploreTab: {
      screen: ExploreTab,
      //   path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Explore',
        //     tabBarIcon: ({
        //       tintColor,
        //       focused,
        //     }: {
        //       tintColor: string,
        //       focused: boolean,
        //     }) => (
        //       <Ionicons
        //         name={focused ? 'ios-settings' : 'ios-settings'}
        //         size={26}
        //         style={{color: tintColor}}
        //       />
        //     ),
      },
    },
    ProfileTab: {
      screen: ProfileTab,
      //   path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Profile',
        //     tabBarIcon: ({
        //       tintColor,
        //       focused,
        //     }: {
        //       tintColor: string,
        //       focused: boolean,
        //     }) => (
        //       <Ionicons
        //         name={focused ? 'ios-settings' : 'ios-settings'}
        //         size={26}
        //         style={{color: tintColor}}
        //       />
        //     ),
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
