export const API_KEY = '92e41fd56e0a4f03be206a45d76d65ef';
export const ROOT_URL = 'https://newsapi.org/v2';
const withKey = url => `${ROOT_URL}${url}?api_key=${API_KEY}`;

// Images
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
export const getW45ImageUrl = imagePath => `${BASE_IMAGE_URL}w45${imagePath}`;
export const getW92ImageUrl = imagePath => `${BASE_IMAGE_URL}w92${imagePath}`;
export const getW185ImageUrl = imagePath => `${BASE_IMAGE_URL}w185${imagePath}`;
export const getW300ImageUrl = imagePath => `${BASE_IMAGE_URL}w300${imagePath}`;
export const getW500ImageUrl = imagePath => `${BASE_IMAGE_URL}w500${imagePath}`;
export const getW780ImageUrl = imagePath => `${BASE_IMAGE_URL}w780${imagePath}`;
export const getW1280ImageUrl = imagePath =>
  `${BASE_IMAGE_URL}w1280${imagePath}`;

// News Details
export const getDetailsMovieUrl = ({movieId}) => withKey(`/movie/${movieId}`);
export const getMovieAccountStateUrl = ({movieId, sessionId}) =>
  `${withKey(`/movie/${movieId}/account_states`)}&session_id=${sessionId}`;
export const getMovieRecommendationsUrl = ({movieId, page = 1}) =>
  `${withKey(`/movie/${movieId}/recommendations`)}&page=${page}`;

// Movies Sections
export const getPopularMoviesUrl = ({page = 1}) =>
  `${withKey('/movie/popular')}&page=${page}`;
export const getTopRatedMoviesUrl = ({page = 1}) =>
  `${withKey('/movie/top_rated')}&page=${page}`;
export const getTrendingDailyMoviesUrl = ({page = 1}) =>
  `${withKey('/trending/movie/day')}&page=${page}`;
export const getTrendingWeeklyMoviesUrl = ({page = 1}) =>
  `${withKey('/trending/movie/week')}&page=${page}`;

// Movies Account State
export const getFavoriteMovieUrl = ({accountId, sessionId, page = 1}) =>
  `${withKey(
    `/account/${accountId}/favorite/movies`,
  )}&session_id=${sessionId}&page=${page}`;
export const getWatchlistUrl = ({accountId, sessionId, page = 1}) =>
  `${withKey(
    `/account/${accountId}/watchlist/movies`,
  )}&session_id=${sessionId}&page=${page}`;
export const getAddToFavoriteUrl = ({accountId, sessionId}) =>
  `${withKey(`/account/${accountId}/favorite`)}&session_id=${sessionId}`;
export const getAddToWatchlistUrl = ({accountId, sessionId}) =>
  `${withKey(`/account/${accountId}/watchlist`)}&session_id=${sessionId}`;

// Movies Search
export const getSearchMoviesUrl = ({page = 1, query}) =>
  `${withKey('/search/movie')}&page=${page}&query=${query}`;

// Imdb
export const getImdbLink = imdbID => `https://www.imdb.com/title/${imdbID}`;
