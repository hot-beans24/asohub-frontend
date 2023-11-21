import useSWRMutation from 'swr/mutation'

import useFetcher from '@@/features/api/hooks/useFetcher'

import ResponseBody from '@@/features/api/types/httpbody/response/FetchUserAuth'

import useUserState from './useUserState'

/* ⭐️ ユーザー認証情報フック ⭐️ */
const useUserAuth = () => {
  const fetcher = useFetcher<null, ResponseBody>('fetchUserAuth', {
    method: 'GET',
  })

  const { error, isMutating, trigger } = useSWRMutation('/api/auth-status', fetcher)

  const { user, setUser } = useUserState()

  const isLoggedIn = (): boolean => {
    return !!user
  }

  const fetchUserAuth = async (): Promise<void> => {
    const result = await trigger(null)
    if (result && result.authenticated && result.user) {
      const { user } = result
      setUser({
        id: user.user_id,
        email: user.email,
        name: user.user_name,
        departmentID: user.department_id,
        grade: user.grade,
        githubUserID: user.github_username,
        githubUserIcon: user.github_user_icon,
        isRepoRegistered: user.is_repo_registered,
        role: user.role,
      })
    } else {
      setUser(null)
    }
  }

  return {
    isLoggedIn,
    fetchUserAuth,
    isMutating,
    error,
  }
}

export default useUserAuth
