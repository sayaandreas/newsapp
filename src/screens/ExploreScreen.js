import React from 'react';
import {Text, View, Button} from 'react-native';

export default class ExploreScreen extends React.Component {
  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Explore Screen</Text>
        <Button
          title="Go To News Detail"
          onPress={() =>
            this.props.navigation.push('NewsDetailScreen', {page: 3})
          }></Button>
      </View>
    );
  }
}
