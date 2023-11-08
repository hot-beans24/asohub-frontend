import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'
import useUserState from '@@/features/auth/hooks/useUserState'

import GithubRepository from '@@/features/github/types/GithubRepository'

import LinkGithubRepositoriesResBody from '@@/features/api/types/LinkGithubRepositoriesResBody'

/* ⭐️ GitHubリポジトリ紐付けフック ⭐️ */
const useLinkGithubRepositories = () => {
  const { isLoading, setIsLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  const { fetchUserAuth } = useUserAuth()
  const { user } = useUserState()

  // 🌐 GitHubリポジトリを紐付け
  const linkGithubRepositories = async (githubRepositories: GithubRepository[]): Promise<boolean> => {
    if (!user) return false

    if (githubRepositories.length === 0) {
      setIsLoading(false)
      setError({ key: 'linkGithubRepositoriesFieldError', message: 'リポジトリが選択されていません' })
      return false
    }

    apiInit()

    try {
      await asohubApiClient.post<LinkGithubRepositoriesResBody>(
        `/user/${user.id}/repositories`,
        githubRepositories
          .sort((a, b) => a.id - b.id)
          .map((githubRepository) => ({
            id: githubRepository.id,
            name: githubRepository.name,
            description: githubRepository.description,
            created_at: githubRepository.createdAt,
          }))
      )

      await fetchUserAuth({ do: true })
      return true
    } catch (error) {
      if (isAxiosError(error)) {
        /**
         * ---------------------------------
         * 💡 HTTPステータスコードでエラー処理を分岐
         * ---------------------------------
         * 1. その他
         * ---------------------------------
         */
        switch (error.response?.status) {
          default: {
            setError({ key: 'linkGithubRepositoriesError', message: 'GitHubリポジトリ紐付け処理エラー' })
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
    linkGithubRepositories,
  }
}

export default useLinkGithubRepositories
