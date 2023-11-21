import { useState, useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import useSWRMutation from 'swr/mutation'

import useFetcher from '@@/features/api/hooks/useFetcher'

import ResponseBody from '@@/features/api/types/httpbody/response/FetchGithubUser'

import recoilGithubUser from '@@/features/github/recoil/githubUser'
import GithubUser from '@@/features/github/types/GithubUser'

/* ⭐️ GitHubユーザーフック ⭐️ */
const useGithubUser = () => {
  const fetcher = useFetcher<null, ResponseBody>('fetchGithubUser', {
    errors: {
      notfound: { key: 'fetchGithubUser-NotFound', message: 'アカウントが見つかりませんでした' },
    },
  })

  const [githubUserID, setGithubUserID] = useState<string | null>(null)

  const { error, isMutating, trigger } = useSWRMutation(() => `/api/github-user/${githubUserID}`, fetcher)

  const [githubUser, setGithubUser] = useRecoilState<GithubUser>(recoilGithubUser)
  const resetGithubUser = useResetRecoilState(recoilGithubUser)

  const fetchGithubUser = async (): Promise<void> => {
    const result = await trigger(null)
    if (result) {
      setGithubUser({
        id: result.login,
        name: result.name,
        icon: result.avatar_url,
      })
    }
  }

  useEffect(() => {
    if (githubUserID) {
      fetchGithubUser()
    }
  }, [githubUserID])

  return {
    setGithubUserID,
    fetchGithubUser,
    resetGithubUser,
    githubUser,
    isMutating,
    error,
  }
}

export default useGithubUser
