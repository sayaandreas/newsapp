import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import NewsContent from '../components/NewsContent';
import NewsList from '../components/NewsList';
import {getNewsDetail} from '../redux/actions/NewsAction';
import routes from '../routes';
import {getMoreNewsFromDomainsUrl} from '../api/urls';

class HomeNewsDetailScreen extends React.Component {
  state = {
    isLoading: true,
    moreNews: null,
  };

  componentDidMount() {
    this.getMoreNewsFromDomainsUrl();
  }

  getMoreNewsFromDomainsUrl = async () => {
    const {news} = this.props;
    try {
      const url = getMoreNewsFromDomainsUrl(news.source.name.toLowerCase());
      let response = await fetch(url);
      let responseJson = await response.json();
      this.setState({moreNews: responseJson.articles, isLoading: false});
    } catch (error) {
      console.log(error);
    }
  };

  onNewsItemSelectedHandler = item => {
    this.props.getNewsDetail({
      onSuccess: () => {
        this.props.navigation.push(routes.HomeNewsDetailScreen);
        this.getMoreNewsFromDomainsUrl();
      },
      news: item,
      source: 'Home',
    });
  };

  render() {
    const {isLoading, moreNews} = this.state;
    const {news} = this.props;
    return (
      <ScrollView style={{flex: 1}}>
        <NewsContent news={news} />
        <View>
          <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>
            More from {news.source.name}
          </Text>
          {isLoading || moreNews == null ? (
            <ActivityIndicator />
          ) : (
            <NewsList
              onNewsItemSelected={this.onNewsItemSelectedHandler}
              newsListData={moreNews}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news.selectedHomeNews,
});

const mapDispatchToProps = dispatch => ({
  getNewsDetail: (onSuccess, news, source) =>
    dispatch(getNewsDetail(onSuccess, news, source)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeNewsDetailScreen);
