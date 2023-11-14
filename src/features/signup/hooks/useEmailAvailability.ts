import useSWRMutation from 'swr/mutation'

import useAPIStatus from '@@/features/api/hooks/useAPIStatus'
import useFetcher from '@@/features/api/hooks/useFetcher'

import RequestBody from '@@/features/api/types/httpbody/request/FetchEmailAvailability'
import ResponseBody from '@@/features/api/types/httpbody/response/FetchEmailAvailability'

const useEmailAvailability = () => {
  const fetcher = useFetcher<RequestBody, ResponseBody>('fetchEmailAvailability', {
    method: 'POST',
    errors: {
      badrequest: { key: 'fetchEmailAvailability-BadRequest', message: 'メールアドレスが不正です' },
    },
  })

  const { error, isMutating, trigger } = useSWRMutation('/api/email-check', fetcher)

  const { setError } = useAPIStatus()

  const fetchEmailAvailability = async (email: string): Promise<boolean> => {
    const result = await trigger({ email })
    if (!result?.is_available) {
      setError({ key: 'email-NotAvailable', message: 'このメールアドレスは使用できません' })
    }
    return !!result?.is_available
  }

  return {
    fetchEmailAvailability,
    isMutating,
    error,
  }
}

export default useEmailAvailability
