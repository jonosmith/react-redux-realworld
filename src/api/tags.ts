import axios from 'axios'

import * as config from '../config'

export async function fetchAllTags() {
  return axios.get(config.API_URL_TAGS)
}
