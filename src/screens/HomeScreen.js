import React from 'react';
import {Text, View, ActivityIndicator, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {getTopHeadlines, getNewsDetail} from '../redux/actions/NewsAction';
import NewsList from '../components/NewsList';
import TopHeadlines from '../components/TopHeadlines';
import routes from '../routes';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'News App',
    headerStyle: {
      backgroundColor: 'dodgerblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.props.getTopHeadlines({
      onSuccess: this.onGetTopHeadlinesSucess,
      onError: this.onGetTopHeadlinesError,
    });
  }

  onGetTopHeadlinesSucess = () => {
    this.setState({isLoading: false});
  };

  onGetTopHeadlinesError = error => {
    this.setState({isLoading: false});
  };

  onNewsItemSelectedHandler = item => {
    this.props.getNewsDetail({
      onSuccess: () => this.props.navigation.push(routes.HomeNewsDetailScreen),
      news: item,
      source: 'Home',
    });
  };

  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={{flex: 1, paddingHorizontal: 5}}>
          <View style={{marginTop: 10, paddingHorizontal: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Features</Text>
          </View>
          <View style={{flex: 1, padding: 10, marginBottom: 10}}>
            <TopHeadlines
              headlinesCarousel={this.props.topHeadlines.slice(
                0,
                5,
              )}></TopHeadlines>
          </View>
          <View>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>News</Text>
            </View>
            <NewsList
              onNewsItemSelected={this.onNewsItemSelectedHandler}
              newsListData={this.props.topHeadlines.slice(5)}></NewsList>
          </View>
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => ({
  topHeadlines: state.news.topHeadlines,
});

const mapDispatchToProps = dispatch => ({
  getTopHeadlines: (onSuccess, onError) =>
    dispatch(getTopHeadlines(onSuccess, onError)),
  getNewsDetail: (onSuccess, news, source) =>
    dispatch(getNewsDetail(onSuccess, news, source)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
