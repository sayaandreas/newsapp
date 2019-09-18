import React from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import NewsList from '../components/NewsList';
import TopicHeader from '../components/TopicHeader';
import {getNewsByTopicUrl, getNewsDetail} from '../redux/actions/NewsAction';
import routes from '../routes';

class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore News',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    page: 1,
    query: 'Bitcoin',
  };

  componentDidMount() {
    this.requestNewsByTopic();
  }

  requestNewsByTopic = (query = this.state.query, page = this.state.page) => {
    this.props.getNewsByTopicUrl({
      onSuccess: this.onGetNewsByTopicSucess,
      onError: this.onGetNewsByTopicError,
      query,
      page,
    });
  };

  onGetNewsByTopicSucess = () => {
    this.setState({isLoading: false});
  };

  onGetNewsByTopicError = error => {
    this.setState({isLoading: false});
  };

  onTopicHeaderChange = item => {
    this.requestNewsByTopic(item, this.state.page);
    this.setState({query: item});
  };

  onNewsItemSelectedHandler = item => {
    this.props.getNewsDetail({
      onSuccess: () =>
        this.props.navigation.navigate(routes.ExploreNewsDetailScreen),
      news: item,
      souce: 'Explore',
    });
  };

  render() {
    const {newsByTopic, isLoading} = this.props;
    return (
      <ScrollView style={{flex: 1, paddingHorizontal: 5}}>
        <TopicHeader onItemPressed={this.onTopicHeaderChange} />
        {isLoading || newsByTopic == null ? (
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator />
          </View>
        ) : (
          <NewsList
            onNewsItemSelected={this.onNewsItemSelectedHandler}
            newsListData={newsByTopic}
          />
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.news.isFetchingnewsByTopic,
  newsByTopic: state.news.newsByTopic,
});

const mapDispatchToProps = dispatch => ({
  getNewsByTopicUrl: (onSuccess, onError, query, page) =>
    dispatch(getNewsByTopicUrl(onSuccess, onError, query, page)),
  getNewsDetail: (onSuccess, news, source) =>
    dispatch(getNewsDetail(onSuccess, news, source)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExploreScreen);
