/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
//import {Provider as StoreProvider} from 'react-redux';
//import store from './store';
import RootStack from './navigator';

class App extends Component {
  render() {
    return (
      // <StoreProvider store={store}>
      <PaperProvider>
        <View style={{flex: 1}}>
          <RootStack />
        </View>
      </PaperProvider>
      // </StoreProvider>
    );
  }
}

export default App;
