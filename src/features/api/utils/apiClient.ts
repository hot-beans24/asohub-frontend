import axios from 'axios'

export const asohubApiClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const githubApiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const { isAxiosError, HttpStatusCode } = axios
