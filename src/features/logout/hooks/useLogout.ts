import useSWRMutation from 'swr/mutation'

import useFetcher from '@@/features/api/hooks/useFetcher'

import ResponseBody from '@@/features/api/types/httpbody/response/Logout'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

/* ⭐️ ログアウトフック ⭐️ */
const useLogout = () => {
  const fetcher = useFetcher<null, ResponseBody>('logout', {
    method: 'POST',
  })

  const { error, isMutating, trigger } = useSWRMutation('/api/logout', fetcher)

  const { fetchUserAuth } = useUserAuth()

  const logout = async (): Promise<boolean> => {
    const result = await trigger(null)
    if (result) {
      await fetchUserAuth()
    }
    return !!result
  }

  return {
    logout,
    isMutating,
    error,
  }
}

export default useLogout
