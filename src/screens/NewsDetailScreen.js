import React from 'react';
import {Text, View, Button} from 'react-native';

export default class NewsDetailScreen extends React.Component {
  // Render any loading content that you like here
  render() {
    const {navigation} = this.props;
    const page = navigation.getParam('page', 'NO-ID');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>NewsDetailScreen</Text>
        <Text style={{fontSize: 30}}>Page Num {page}</Text>
        <Button
          title="Go To News Detail"
          onPress={() =>
            this.props.navigation.navigate('NewsDetailScreen', {page: 2})
          }></Button>
      </View>
    );
  }
}
