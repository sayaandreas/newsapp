const API_KEY = '92e41fd56e0a4f03be206a45d76d65ef';
const ROOT_URL = 'https://newsapi.org/v2';
const withKey = url => `${ROOT_URL}${url}&apiKey=${API_KEY}`;

// News Details
export const getDetailsMovieUrl = ({movieId}) => withKey(`/movie/${movieId}`);
export const getMovieAccountStateUrl = ({movieId, sessionId}) =>
  `${withKey(`/movie/${movieId}/account_states`)}&session_id=${sessionId}`;
export const getMovieRecommendationsUrl = ({movieId, page = 1}) =>
  `${withKey(`/movie/${movieId}/recommendations`)}&page=${page}`;

// News Sections
export const getTopHeadlinesUrl = () =>
  `${withKey('/top-headlines?country=us')}`;
export const getNewsByTopicUrl = (query, page) =>
  withKey(`/everything?q=${query}&page=${page}`);
export const getMoreNewsFromDomainsUrl = domains =>
  withKey(`/everything?domains=${domains}&pageSize=${5}`);
