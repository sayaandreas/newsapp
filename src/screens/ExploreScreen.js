import React from 'react';
import {Text, View} from 'react-native';

export default class ExploreScreen extends React.Component {
  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Explore Screen</Text>
      </View>
    );
  }
}
