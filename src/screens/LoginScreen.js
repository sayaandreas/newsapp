import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import routes from '../routes';

export default class LoginScreen extends React.Component {
  state = {
    username: '',
  };
  render() {
    const {username} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 40}}>
        <View style={{marginBottom: 40}}>
          <TextInput
            mode="outlined"
            label="Username"
            value={this.state.text}
            onChangeText={text => this.setState({username: text})}
          />
        </View>
        <Button
          disabled={username === ''}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Sign in
        </Button>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 0.5, backgroundColor: 'grey', flex: 1}}></View>
          <Text style={{padding: 10}}>or</Text>
          <View style={{height: 0.5, backgroundColor: 'grey', flex: 1}}></View>
        </View>
        <Button
          mode="text"
          color="green"
          onPress={() => this.props.navigation.navigate(routes.RegisterScreen)}>
          Create New Account
        </Button>
      </View>
    );
  }
}
