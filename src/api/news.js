import {getTopHeadlinesUrl, getNewsByTopicUrl} from '../api/urls';

export const fetchTopHeadlines = () =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(getTopHeadlinesUrl());
      let responseJson = await response.json();

      resolve(responseJson);
    } catch (error) {
      reject(error);
    }
  });

export const fetchNewsByTopicUrl = ({query, page}) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = getNewsByTopicUrl(query, page);
      console.log(url);
      let response = await fetch(url);
      let responseJson = await response.json();
      resolve(responseJson);
    } catch (error) {
      reject(error);
    }
  });
