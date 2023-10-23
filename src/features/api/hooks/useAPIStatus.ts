import { useState, useEffect } from 'react'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import Error from '@@/features/api/types/Error'

/* ⭐️ APIステータスフック ⭐️ */
const useAPIStatus = () => {
  // 🌐 APIローディング判定ステート
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // 🌐 APIアクセスエラーステート
  const [error, setError] = useState<Error>(null)

  const { setFlashMessages } = useFlashMessages()

  useEffect(() => {
    if (error) {
      setFlashMessages([{ key: error.key, type: 'error', message: error.message }])
    }
  }, [error])

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
