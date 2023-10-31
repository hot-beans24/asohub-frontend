import { useState, useEffect } from 'react'

import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'

import useAPIStatus from '@@/features/api/hooks/useAPIStatus'
import FetchHomePostsResBody from '@@/features/api/types/FetchHomePostsResBody'

import Post from '@@/features/post/types/Post'

/* ⭐️ Home投稿一覧取得フック ⭐️ */
const useHomePosts = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  // 🌐
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // 🌐 投稿一覧を取得
    const fetchPosts = async (): Promise<void> => {
      apiInit()

      try {
        const res = await asohubApiClient.get<FetchHomePostsResBody>(`/repositories`)

        const postsData: Post[] = res.data.map(
          ({
            id,
            name,
            user_id,
            asohub_username,
            github_username,
            github_user_icon,
            repository_url,
            description,
            repository_created_at,
            created_at,
          }) => ({
            id,
            name,
            userID: user_id,
            asohubUsername: asohub_username,
            githubUserID: github_username,
            githubUserIcon: github_user_icon,
            repositoryURL: repository_url,
            description,
            repositoryCreatedAt: repository_created_at,
            createdAt: created_at,
          })
        )

        // ✅ 正常にAPIアクセスできた場合GitHubリポジトリ情報をステートに保存
        setPosts(postsData)
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
              setError({ key: 'fetchHomePotsError', message: 'ホーム投稿一覧取得エラー' })
              break
            }
          }
        }
      } finally {
        apiEnd()
      }
    }

    fetchPosts()
  }, [])

  return {
    posts,
    isLoading,
    error,
  }
}

export default useHomePosts
