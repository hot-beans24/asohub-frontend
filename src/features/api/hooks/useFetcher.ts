import axios, { HttpStatusCode } from 'axios'

import useAPIStatus from '@@/features/api/hooks/useAPIStatus'
import Error from '@@/features/api/types/Error'

type ErrorOptions = Record<string, Error>

const useFetcher = <T extends {} | null, E extends {} | null>(
  key: string,
  options?: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    errors?: ErrorOptions
  }
) => {
  const { setError } = useAPIStatus()

  return async (endpoint: string, data?: { arg: T }): Promise<E | null> => {
    setError(null)
    try {
      console.log(`🟢 fetcher(${key} : ${endpoint})の実行`)
      const res = await axios<E>(endpoint.includes('http') ? endpoint : `${import.meta.env.VITE_APP_URL}${endpoint}`, {
        method: options?.method,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data?.arg,
      })
      console.log('👇 レスポンスボディ')
      console.log(res.data)
      return res.data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const errors = options?.errors
        switch (e.response?.status) {
          case HttpStatusCode.BadRequest: {
            setError(errors?.badrequest || { key: `${key}-BadRequest`, message: `${key}-BadRequest` })
            break
          }
          case HttpStatusCode.Unauthorized: {
            setError(errors?.unauthorized || { key: `${key}-Unauthorized`, message: `${key}-Unauthorized` })
            break
          }
          case HttpStatusCode.NotFound: {
            setError(errors?.notfound || { key: `${key}-NotFound`, message: `${key}-NotFound` })
            break
          }
          case HttpStatusCode.Conflict: {
            setError(errors?.conflict || { key: `${key}-Conflict`, message: `${key}-Conflict` })
            break
          }
          default: {
            setError({ key: `${key}-Error`, message: `${key}-Error` })
            break
          }
        }
      }
      return null
    } finally {
      console.log(`🔴 fetcher(${key} : ${endpoint})の終了`)
      console.log('------------------------------------------------------------------------')
    }
  }
}

export default useFetcher
