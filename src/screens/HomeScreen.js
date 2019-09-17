import React from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Home Screen</Text>
      </View>
    );
  }
}
