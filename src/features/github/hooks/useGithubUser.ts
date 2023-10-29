import { useRecoilState, useResetRecoilState } from 'recoil'

import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import recoilGithubUser from '@@/features/github/recoil/githubUser'

import FetchUserAuthResBody from '@@/features/api/types/FetchGithubUserResBody'
import GithubUser from '@@/features/github/types/GithubUser'

/* ⭐️ GitHubユーザーフック ⭐️ */
const useGithubUser = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  // 🌐 GitHubユーザー情報ステート
  const [githubUser, setGithubUser] = useRecoilState<GithubUser>(recoilGithubUser)
  // 🌐 GitHubユーザー情報ステートをリセットする関数
  const resetGithubUser = useResetRecoilState(recoilGithubUser)

  // 🌐 GitHubユーザー情報を取得
  const fetchGithubUser = async (userID: string): Promise<boolean> => {
    apiInit()

    try {
      const res = await asohubApiClient.get<FetchUserAuthResBody>(`/github-user/${userID}`)

      const githubUserData = res.data

      // ✅ 正常にAPIアクセスできた場合GitHubユーザー情報をステートに保存
      setGithubUser({
        id: githubUserData.login,
        name: githubUserData.name,
        icon: githubUserData.avatar_url,
      })

      return true
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
            setError({ key: 'githubUserNotFound', message: 'ユーザーが見つかりませんでした' })
            break
          }
          default: {
            setError({ key: 'githubUserError', message: 'GitHubユーザー検索エラー' })
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
    fetchGithubUser,
    resetGithubUser,
    githubUser,
    isLoading,
    error,
  }
}

export default useGithubUser
