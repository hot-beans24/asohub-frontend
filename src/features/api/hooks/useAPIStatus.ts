import { useState } from 'react'

// ⭐️ APIステータスフック
const useAPIStatus = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const apiInit = (): void => {
    setIsLoading(true)
    setError(null)
  }

  const apiEnd = (): void => {
    setIsLoading(false)
  }

  return {
    isLoading,
    setIsLoading,
    error,
    setError,
    apiInit,
    apiEnd
  }
}

export default useAPIStatus
