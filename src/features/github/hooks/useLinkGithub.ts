import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

/* ⭐️ GitHubアカウント紐付けフック ⭐️ */
const useLinkGithub = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  const linkGithub = async (githubUserID: string): Promise<boolean> => {
    apiInit()

    type ResponseBody = {}

    try {
      /* 🍄 実際の処理 🍄 */
      await asohubApiClient.post<ResponseBody>('/link-github', {
        id: githubUserID
      })
      return true
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          default: {
            setError('GitHub紐付け処理エラー')
            console.log(error)
            break
          }
        }
      }
      return false
    } finally {
      apiEnd()
    }
  }

  return {
    isLoading,
    error,
    setError,
    linkGithub
  }
}

export default useLinkGithub
