import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import moment from 'moment';

class NewsItem extends React.Component {
  render() {
    const {article, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={{uri: article.urlToImage}}
          style={{width: 90, height: 90}}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text numberOfLines={3} style={{fontSize: 18, flexWrap: 'wrap'}}>
            {article.title}
          </Text>
          <Text>{moment(article.publishedAt).calendar()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default NewsItem;
