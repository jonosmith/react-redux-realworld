import axios from 'axios'
import * as config from '../config'

async function fetchAllArticles() {
  return axios.get(config.API_URL_ARTICLES)
}

async function fetchAllTags() {
  return axios.get(config.API_URL_TAGS)
}

async function registerUser({
  email,
  username,
  password,
}: {
  email: string
  username: string
  password: string
}) {
  return axios.post(config.API_URL_REGISTER, {
    email,
    password,
    username,
  })
}

export default {
  articles: {
    fetchAll: fetchAllArticles,
  },
  tags: {
    fetch: fetchAllTags,
  },
  user: {
    register: registerUser,
  },
}
