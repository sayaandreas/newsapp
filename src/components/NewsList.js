import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import NewsItem from './NewsItem';

class NewsList extends React.Component {
  renderLoading = () => {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text style={{fontSize: 18}}>No News</Text>
      </View>
    );
  };

  renderNews = ({item, onPress}) => (
    <NewsItem onPress={onPress} article={item} />
  );

  renderNewsList = () => {
    const {newsListData, onNewsItemSelected} = this.props;

    //alert(onNewsItemSelected == null);

    return (
      <FlatList
        data={newsListData}
        style={styles.list}
        renderItem={({item}) =>
          this.renderNews({
            item: item,
            onPress: () => onNewsItemSelected(item),
          })
        }
        keyExtractor={(item, index) => `${index}`}
      />
    );
  };

  render() {
    const {newsListData} = this.props;
    return newsListData.length === 0
      ? this.renderLoading()
      : this.renderNewsList();
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default NewsList;
