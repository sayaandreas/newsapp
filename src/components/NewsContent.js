import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import moment from 'moment';

class NewsContent extends React.Component {
  render() {
    const {news} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 28}}>{news.title}</Text>
          <Text style={{fontSize: 14}}>
            {news.author} - {news.source.name}
          </Text>
          <Text style={{fontSize: 13, color: 'darkgrey'}}>
            {moment(news.publishedAt).calendar()}
          </Text>
        </View>
        <View>
          <Image
            source={{uri: news.urlToImage}}
            style={{width: '100%', height: 200}}
          />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 15}}>{news.content}</Text>
          <Text style={{fontSize: 15}}>
            {news.description}
            <Text
              style={{fontWeight: 'bold'}}
              onPress={() => alert('reda more')}>
              {' '}
              Read more...
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default NewsContent;
