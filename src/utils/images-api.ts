import { createApi } from 'unsplash-js'

const { REACT_APP_UNSPLASH_API_URL } = process.env

const unsplashApi = createApi({
  apiUrl: REACT_APP_UNSPLASH_API_URL || `http://${window.location.hostname}:8080/unsplash-proxy`,
})

export default unsplashApi
