import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserState from '@@/features/auth/hooks/useUserState'

import GithubRepository from '@@/features/github/types/GithubRepository'

import LinkGithubRepositoriesResBody from '@@/features/api/types/LinkGithubRepositoriesResBody'

/* ⭐️ GitHubリポジトリ紐付けフック ⭐️ */
const useLinkGithubRepositories = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  const { user } = useUserState()

  // 🌐 GitHubリポジトリを紐付け
  const linkGithubRepositories = async (githubRepositories: GithubRepository[]): Promise<boolean> => {
    apiInit()

    if (!user) return false

    try {
      await asohubApiClient.post<LinkGithubRepositoriesResBody>(
        `/github-repositories/user/${user.id}`,
        githubRepositories
          .sort((a, b) => a.id - b.id)
          .map((githubRepository) => ({
            repository_id: githubRepository.id,
            repository_name: githubRepository.name,
            description: githubRepository.description,
            create_at: githubRepository.createdAt,
          }))
      )

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
