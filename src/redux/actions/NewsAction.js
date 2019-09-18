import {News} from './types';
import {fetchTopHeadlines, fetchNewsByTopicUrl} from '../../api/news';

// export const getTopHeadlines = ({ showToast, onSuccess, }) => async dispatch => {
export const getTopHeadlines = ({onSuccess, onError}) => async dispatch => {
  dispatch({type: News.GET_TOP_HEADLINES_BEGIN});
  try {
    const {articles} = await fetchTopHeadlines();

    dispatch({
      type: News.GET_TOP_HEADLINES_SUCCESS,
      payload: articles,
    });
    onSuccess();
  } catch (error) {
    //showToast && showToast('Something went wrong. Please check your connection.');
    dispatch({type: News.GET_TOP_HEADLINES_FAIL});
    onError('Something went wrong. Please check your connection.');
  }
};

export const getNewsByTopicUrl = ({
  onSuccess,
  onError,
  query,
  page,
}) => async dispatch => {
  dispatch({type: News.GET_NEWS_BY_TOPIC_BEGIN});
  try {
    const {articles} = await fetchNewsByTopicUrl({query, page});

    dispatch({
      type: News.GET_NEWS_BY_TOPIC_SUCCESS,
      payload: articles,
    });
    onSuccess();
  } catch (error) {
    //showToast && showToast('Something went wrong. Please check your connection.');
    dispatch({type: News.GET_NEWS_BY_TOPIC_FAIL});
    onError('Something went wrong. Please check your connection.');
  }
};

export const getNewsDetail = ({onSuccess, news, source}) => async dispatch => {
  if (source === 'Home') {
    dispatch({type: News.GET_HOME_NEWS_DETAIL, payload: news});
  } else {
    dispatch({type: News.GET_EXPLORE_NEWS_DETAIL, payload: news});
  }
  onSuccess();
};
