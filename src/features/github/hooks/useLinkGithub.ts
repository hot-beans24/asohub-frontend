import useSWRMutation from 'swr/mutation'

import useFetcher from '@@/features/api/hooks/useFetcher'

import RequestBody from '@@/features/api/types/httpbody/request/LinkGithub'
import ResponseBody from '@@/features/api/types/httpbody/response/linkGithub'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'
import useUserState from '@@/features/auth/hooks/useUserState'

/* ⭐️ GitHubアカウント紐付けフック ⭐️ */
const useLinkGithub = () => {
  const fetcher = useFetcher<RequestBody, ResponseBody>('linkGithub', {
    method: 'POST',
    errors: {
      conflict: { key: 'linkGithub-Conflict', message: 'このGitHubアカウントは使用できません' },
    },
  })

  const { error, isMutating, trigger } = useSWRMutation('/api/link-github', fetcher)

  const { user } = useUserState()
  const { fetchUserAuth } = useUserAuth()

  const linkGithub = async (githubUserID: string): Promise<boolean> => {
    const result = await trigger({ user_id: user!.id, github_username: githubUserID })
    if (result) {
      await fetchUserAuth()
    }
    return !!result
  }

  return {
    linkGithub,
    isMutating,
    error,
  }
}

export default useLinkGithub
