import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useLogin from '@@/features/login/hooks/useLogin'

import SignupFormValues from '@@/features/signup/types/SignupFormValues'
import SignupResBody from '@@/features/signup/types/SignupResBody'

/* ⭐️ サインアップフック ⭐️ */
const useSignup = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { login } = useLogin()

  // 🌐 サインアップ
  const signup = async (formValues: SignupFormValues): Promise<boolean> => {
    apiInit()

    try {
      await asohubApiClient.post<SignupResBody>('/signup', {
        email: formValues.email,
        password: formValues.password,
        name: formValues.username,
        department_id: formValues.departmentID,
        grade: formValues.grade,
      })

      // ✅ 正常にAPIアクセスできた場合ログイン
      login(formValues.email, formValues.password)

      return true
    } catch (error) {
      if (isAxiosError(error)) {
        /**
         * ---------------------------------
         * 💡 HTTPステータスコードでエラー処理を分岐
         * ---------------------------------
         * 1. 409
         * 2. その他
         * ---------------------------------
         */
        switch (error.response?.status) {
          case HttpStatusCode.Conflict: {
            setError('このメールアドレスはすでに使用されています')
            break
          }
          default: {
            setError('サインアップエラー')
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
    signup,
    isLoading,
    error,
  }
}

export default useSignup
