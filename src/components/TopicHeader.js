import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

class TopicHeader extends React.Component {
  // onPress = () => {
  //     const { navigation, movie } = this.props;
  //     navigation.push(RouteNames.MovieDetailsScreen, { movie });
  // };

  state = {
    selectedButton: 'Bitcoin',
    buttonName: ['Bitcoin', 'Apple', 'Earthquake', 'Animal'],
  };

  onItemPressed = item => {
    const {onItemPressed} = this.props;
    onItemPressed(item);
    this.setState({selectedButton: item});
  };

  renderButton = item => {
    return (
      <TouchableOpacity
        key={item}
        onPress={() => this.onItemPressed(item)}
        style={{
          backgroundColor:
            this.state.selectedButton == item
              ? 'rgba(169, 169, 169, 0.2)'
              : 'white',
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: this.state.selectedButton == item ? 'dodgerblue' : 'black',
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {buttonName} = this.state;
    return (
      <View style={{padding: 10, marginTop: 10, flexDirection: 'row'}}>
        {buttonName.map(item => this.renderButton(item))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default TopicHeader;
