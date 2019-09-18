import React from 'react';
import {Text, View} from 'react-native';

export default class SplashScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    setTimeout(() => this.props.navigation.navigate('MainStack'), 700);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Splash Screen</Text>
      </View>
    );
  }
}
