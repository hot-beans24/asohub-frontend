import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

import { SignupFormValues } from '@@/features/signup/types/formValues'

/* ⭐️ サインアップフック ⭐️ */
const useSignup = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { fetchUserAuth } = useUserAuth()

  const signup = async (formValues: SignupFormValues): Promise<boolean> => {
    apiInit()

    type ResponseBody = {}

    try {
      /* 🍄 実際の処理 🍄 */
      await asohubApiClient.post<ResponseBody>('/signup', {
        email: formValues.email,
        password: formValues.password,
        name: formValues.username,
        department_id: formValues.departmentID,
        grade: formValues.grade
      })
      fetchUserAuth()
      return true
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case HttpStatusCode.Conflict : {
            setError('このメールアドレスはすでに使用されています')
            break
          }
          default: {
            setError('サインアップエラー')
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
    signup,
    isLoading,
    error
  }
}

export default useSignup
