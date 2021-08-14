import { createApi } from 'unsplash-js'

const { REACT_APP_UNSPLASH_API_URL } = process.env

const origin = REACT_APP_UNSPLASH_API_URL || `http://${window.location.hostname}:8080`

const unsplashApi = createApi({
  apiUrl: `${origin}/unsplash-proxy`,
})

export default unsplashApi
