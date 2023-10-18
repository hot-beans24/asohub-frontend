import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

/* ⭐️ メールアドレス有効性フック ⭐️ */
const useEmailAvailability = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  const fetchEmailAvailability = async (email: string): Promise<boolean> => {
    apiInit()

    type ResponseBody = {
      email: string
      is_available: boolean
    }

    try {
      /* 🍄 実際の処理 🍄 */
      const res = await asohubApiClient.post<ResponseBody>('/email-check', {
        email
      })
      const isAvailable = res.data.is_available

      /* 🔥 確認用 🔥 */
      // const isAvailable = true

      if (!isAvailable) {
        setError('このメールアドレスは使用できません')
      }
      return isAvailable
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case HttpStatusCode.BadRequest: {
            setError('メールアドレスが不正です')
            break
          }
          default: {
            setError('メールアドレス有効性チェックエラー')
            console.log(error)
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
    fetchEmailAvailability,
    isLoading,
    error
  }
}

export default useEmailAvailability
