import { useState, useEffect } from 'react'

// import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import { isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'
// import FetchGithubRepositoriesResBody from '@@/features/api/types/FetchGithubRepositoriesResBody'

import useUserState from '@@/features/auth/hooks/useUserState'

import GithubRepository from '@@/features/github/types/GithubRepository'

/* ⭐️ GitHubリポジトリ一覧取得フック ⭐️ */
const useGithubRepositories = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  // 🌐
  const [githubRepositories, setGithubRepositories] = useState<GithubRepository[]>([])
  const { user } = useUserState()

  useEffect(() => {
    // 🌐 ユーザーのGithubPublicリポジトリを取得
    const fetchGithubRepositories = async (): Promise<void> => {
      if (!user) return

      apiInit()

      try {
        // const res = await asohubApiClient.get<FetchGithubRepositoriesResBody>(
        //   `/user/${user.id}/repositories`
        // )
        const data = []
        for (let i = 0; i < 90; i += 1) {
          data.push({
            id: 659495078 + i,
            name: 'AsoHub',
            html_url: 'https://github.com/soudai531/AsoHub',
            description: '麻生情報ビジネス専門学校内でソースコードを共有するアプリケーション',
            created_at: '2023-06-28T01:02:58Z',
          })
        }
        const res = {
          data,
        }
        const githubRepositoriesData: GithubRepository[] = res.data.map(({ id, name, description, created_at }) => ({
          id,
          name,
          description,
          createdAt: created_at,
        }))

        // ✅ 正常にAPIアクセスできた場合GitHubリポジトリ情報をステートに保存
        setGithubRepositories(githubRepositoriesData)
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
            default: {
              setError({ key: 'githubRepositoriesError', message: 'GitHubリポジトリ取得エラー' })
              break
            }
          }
        }
      } finally {
        apiEnd()
      }
    }

    fetchGithubRepositories()
  }, [])

  return {
    githubRepositories,
    isLoading,
    error,
  }
}

export default useGithubRepositories
