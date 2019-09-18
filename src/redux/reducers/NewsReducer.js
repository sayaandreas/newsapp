import {News} from '../actions/types';

const INITIAL_STATE = {
  isFetchingTopHeadlines: false,
  topHeadlines: null,
  newsByTopic: null,
  isFetchingnewsByTopic: false,
  errorMessage: '',
  selectedHomeNews: null,
  selectedExploreNews: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case News.GET_TOP_HEADLINES_BEGIN:
      return {
        ...state,
        isFetchingTopHeadlines: true,
      };
    case News.GET_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        isFetchingTopHeadlines: false,
        topHeadlines: action.payload,
      };
    case News.GET_TOP_HEADLINES_FAIL:
      return {
        ...state,
        isFetchingTopHeadlines: false,
        errorMessage: action.payload,
      };

    case News.GET_NEWS_BY_TOPIC_BEGIN:
      return {
        ...state,
        isFetchingnewsByTopic: true,
      };
    case News.GET_NEWS_BY_TOPIC_SUCCESS:
      return {
        ...state,
        isFetchingnewsByTopic: false,
        newsByTopic: action.payload,
      };
    case News.GET_NEWS_BY_TOPIC_FAIL:
      return {
        ...state,
        isFetchingnewsByTopic: false,
        errorMessage: action.payload,
      };

    case News.GET_HOME_NEWS_DETAIL:
      return {
        ...state,
        selectedHomeNews: action.payload,
      };
    case News.GET_EXPLORE_NEWS_DETAIL:
      return {
        ...state,
        selectedExploreNews: action.payload,
      };
    default:
      return {...state};
  }
};
