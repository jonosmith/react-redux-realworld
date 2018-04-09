import axios from 'axios'

import * as config from '../config'

export async function fetchAllArticles() {
  return axios.get(config.API_URL_ARTICLES)
}
