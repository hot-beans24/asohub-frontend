import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import FetchEmailAvailabilityResBody from '@@/features/signup/types/FetchEmailAvailabilityResBody'

/* ⭐️ メールアドレス有効性フック ⭐️ */
const useEmailAvailability = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  // 🌐 メールアドレスの有効性をチェック
  const fetchEmailAvailability = async (email: string): Promise<boolean> => {
    apiInit()

    try {
      const res = await asohubApiClient.post<FetchEmailAvailabilityResBody>('/email-check', {
        email,
      })

      const isAvailable = res.data.is_available

      /**
       * ---------------------------------
       * 💡 メールアドレスの有効性を判定
       * ---------------------------------
       * ✅ 有効な場合はそのまま処理を続行
       * ❌ 無効な場合はエラーを設定して処理を続行
       * ---------------------------------
       */
      if (!isAvailable) {
        setError('このメールアドレスは使用できません')
      }

      return isAvailable
    } catch (error) {
      if (isAxiosError(error)) {
        /**
         * ---------------------------------
         * 💡 HTTPステータスコードでエラー処理を分岐
         * ---------------------------------
         * 1. 400
         * 2. その他
         * ---------------------------------
         */
        switch (error.response?.status) {
          case HttpStatusCode.BadRequest: {
            setError('メールアドレスが不正です')
            break
          }
          default: {
            setError('メールアドレス有効性チェックエラー')
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
    error,
  }
}

export default useEmailAvailability
