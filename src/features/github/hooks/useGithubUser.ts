import { useState } from 'react'

import { githubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import FetchUserAuthResBody from '@@/features/github/types/FetchGithubUserResBody'
import GithubUser from '@@/features/github/types/GithubUser'

/* ⭐️ GitHubユーザーフック ⭐️ */
const useGithubUserState = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  // 🌐 GitHubユーザーダミーデータ
  const dummy: GithubUser = { id: '', name: '', icon: '' }
  // 🌐 GitHubユーザー情報ステート
  const [githubUser, setGithubUser] = useState<GithubUser>(dummy)

  // 🌐 GitHubユーザー情報ステートをクリア
  const clearGithubUserState = (): void => {
    setGithubUser(dummy)
  }

  // 🌐 GitHubユーザー情報を取得
  const fetchGithubUser = async (userID: string): Promise<void> => {
    apiInit()

    try {
      const res = await githubApiClient.get<FetchUserAuthResBody>(`/users/${userID}`)

      const githubUserData = res.data

      // ✅ 正常にAPIアクセスできた場合GitHubユーザー情報をステートに保存
      setGithubUser({
        id: githubUserData.login,
        name: githubUserData.name,
        icon: githubUserData.avatar_url,
      })
    } catch (error) {
      if (isAxiosError(error)) {
        /**
         * ---------------------------------
         * 💡 HTTPステータスコードでエラー処理を分岐
         * ---------------------------------
         * 1. 404
         * 2. その他
         * ---------------------------------
         */
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
    error,
  }
}

export default useGithubUserState
