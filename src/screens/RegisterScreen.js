import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import routes from '../routes';

export default class RegisterScreen extends React.Component {
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
          disabled={this.state.text === ''}
          mode="contained"
          color="green"
          onPress={() => console.log('Pressed')}>
          Create New Account
        </Button>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{padding: 10}}>already have account?</Text>
        </View>
        <Button
          mode="text"
          onPress={() => this.props.navigation.navigate(routes.LoginScreen)}>
          Sign in
        </Button>
      </View>
    );
  }
}
