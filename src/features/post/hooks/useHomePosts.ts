import { useState, useEffect } from 'react'
import useSWR from 'swr'

import useFetcher from '@@/features/api/hooks/useFetcher'

import ResponseBody from '@@/features/api/types/httpbody/response/FetchHomePosts'

import Post from '@@/features/post/types/Post'

const useHomePosts = () => {
  const [homePosts, setHomePosts] = useState<Post[]>([])

  const fetcher = useFetcher<null, ResponseBody>('fetchHomePosts', {
    method: 'GET',
  })

  const { data, error, isLoading } = useSWR('/api/repositories', fetcher, {
    revalidateOnFocus: false,
  })

  useEffect(() => {
    if (data) {
      const postsData: Post[] = data.map(
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

      setHomePosts(postsData)
    }
  }, [data])

  return {
    homePosts,
    isLoading,
    error,
  }
}

export default useHomePosts
