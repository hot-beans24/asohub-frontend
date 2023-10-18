import { useState } from 'react'

import { githubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import { GithubUser } from '@@/features/github/types/formValues'

/* ⭐️ GitHubユーザーフック ⭐️ */
const useGithubUserState = () => {
  const dummy: GithubUser = { id: '', name: '', icon: '' }
  const [githubUser, setGithubUser] = useState<GithubUser>(dummy)
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  const clearGithubUserState = (): void => {
    setGithubUser(dummy)
  }

  const fetchGithubUser = async (userID: string): Promise<void> => {
    apiInit()

    type ResponseBody = {
      login: string
      name: string
      avatar_url: string
    }

    try {
      const res = await githubApiClient.get<ResponseBody>(`/users/${userID}`)
      const githubUserData = res.data
      setGithubUser({
        id: githubUserData.login,
        name: githubUserData.name,
        icon: githubUserData.avatar_url
      })
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case HttpStatusCode.NotFound: {
            setError('ユーザーが見つかりませんでした')
            break
          }
          default: {
            setError('GitHubユーザー検索エラー')
            break
          }
        }
      }
    } finally {
      apiEnd()
    }
  }

  return {
    fetchGithubUser,
    clearGithubUserState,
    githubUser,
    isLoading,
    error
  }
}

export default useGithubUserState
