import { useState } from 'react'

/* ⭐️ APIステータスフック ⭐️ */
const useAPIStatus = () => {
  // 🌐 APIローディング判定ステート
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // 🌐 APIアクセスエラーステート
  const [error, setError] = useState<string | null>(null)

  // 🌐 APIアクセス開始時の処理
  const apiInit = (): void => {
    setIsLoading(true)
    setError(null)
  }

  // 🌐 APIアクセス終了時の処理
  const apiEnd = (): void => {
    setIsLoading(false)
  }

  return {
    isLoading,
    setIsLoading,
    error,
    setError,
    apiInit,
    apiEnd,
  }
}

export default useAPIStatus
