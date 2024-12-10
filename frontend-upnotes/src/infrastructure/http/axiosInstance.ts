import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000
})

export const axiosInstanceProtected = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000
})

axiosInstanceProtected.interceptors.request.use(( config ) => {

  const token = localStorage.getItem('user')
  
  if ( token ) {
    config.headers['Authorization'] = `Bearer ${JSON.parse( token )}`
  }

  return config
})