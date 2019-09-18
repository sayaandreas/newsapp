import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import routes from '../routes';

export default class ProfileLandingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 40}}>
        <Button
          mode="contained"
          onPress={() => this.props.navigation.navigate(routes.LoginScreen)}>
          Sign in
        </Button>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 0.5, backgroundColor: 'grey', flex: 1}}></View>
          <Text style={{padding: 10}}>or</Text>
          <View style={{height: 0.5, backgroundColor: 'grey', flex: 1}}></View>
        </View>
        <Button
          mode="contained"
          color="green"
          onPress={() => this.props.navigation.navigate(routes.RegisterScreen)}>
          Create New Account
        </Button>
      </View>
    );
  }
}
