import axios from 'axios'
import { API_URL_ARTICLES, API_URL_TAGS } from '../config'

async function fetchAllArticles() {
  return axios.get(API_URL_ARTICLES)
}

async function fetchAllTags() {
  return axios.get(API_URL_TAGS)
}

export default {
  articles: {
    fetchAll: fetchAllArticles,
  },
  tags: {
    fetch: fetchAllTags,
  },
}
