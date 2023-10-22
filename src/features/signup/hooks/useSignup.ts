import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useLogin from '@@/features/login/hooks/useLogin'

import useSignupFormValues from '@@/features/signup/hooks/useSignupFormValues'
import SignupResBody from '@@/features/api/types/SignupResBody'

/* ⭐️ サインアップフック ⭐️ */
const useSignup = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { signupFormValues, resetSignupFormValues } = useSignupFormValues()
  const { login } = useLogin()

  // 🌐 サインアップ
  const signup = async (): Promise<boolean> => {
    apiInit()

    try {
      await asohubApiClient.post<SignupResBody>('/signup', {
        email: signupFormValues.email,
        password: signupFormValues.password,
        name: signupFormValues.username,
        department_id: signupFormValues.departmentID,
        grade: signupFormValues.grade,
      })

      // ✅ 正常にAPIアクセスできた場合ログイン
      await login(signupFormValues.email, signupFormValues.password)

      // ✅ サインアップフォームの値をリセット
      resetSignupFormValues()

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
