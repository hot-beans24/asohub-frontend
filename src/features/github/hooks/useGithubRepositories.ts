import { useState, useEffect } from 'react'
import useSWR from 'swr'

import useFetcher from '@@/features/api/hooks/useFetcher'

import ResponseBody from '@@/features/api/types/httpbody/response/FetchGithubRepositories'

import useUserState from '@@/features/auth/hooks/useUserState'

import GithubRepository from '@@/features/github/types/GithubRepository'

/* ⭐️ GitHubリポジトリ一覧取得フック ⭐️ */
const useGithubRepositories = () => {
  const [githubRepositories, setGithubRepositories] = useState<GithubRepository[] | null>(null)

  const fetcher = useFetcher<null, ResponseBody>('fetchGithubRepositories', {
    method: 'GET',
  })

  const { user } = useUserState()

  const { data, error, isLoading } = useSWR(`/api/user/${user!.id}/github-repositories`, fetcher, {
    revalidateOnFocus: false,
  })

  useEffect(() => {
    if (data) {
      setGithubRepositories(
        data.map((repository) => ({
          id: repository.id,
          name: repository.name,
          description: repository.description,
          createdAt: repository.created_at,
        }))
      )
    }
  }, [data])

  return {
    githubRepositories,
    isLoading,
    error,
  }
}

export default useGithubRepositories
