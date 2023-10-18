import axios from 'axios'

// 🌐 AsoHubAPIのAxiosインスタンス
export const asohubApiClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 🌐 GitHubAPIのAxiosインスタンス
export const githubApiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

// 🌐 Axiosのエラーかどうかを判定する関数とHTTPステータスコード
export const { isAxiosError, HttpStatusCode } = axios
