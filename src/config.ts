// Environment variables
export const ENV = process.env

// App
export const APP_NAME = ENV.REACT_APP_SITE_NAME

// Routes
export const ROUTE_INDEX = '/'
export const ROUTE_LOGIN = '/login'
export const ROUTE_REGISTER = '/register'

// API Endpoints
export const API_URL = ENV.REACT_APP_API_URL
export const API_URL_ARTICLE = `${API_URL}/articles/:slug`
export const API_URL_ARTICLES = `${API_URL}/articles`
export const API_URL_REGISTER = `${API_URL}/users`
export const API_URL_LOGIN = `${API_URL}/users/login`
export const API_URL_USER = `${API_URL}/user`
export const API_URL_ARTICLE_COMMENTS = `${API_URL}/articles/:article/comments`
export const API_URL_PROFILE = `${API_URL}/profiles/:username`
export const API_URL_PROFILE_FOLLOW = `${API_URL}/profiles/:username/follow`
export const API_URL_TAGS = `${API_URL}/tags`

export const FORM_STATE_PATH = 'app.forms'
