import useSWRMutation from 'swr/mutation'

import useLogin from '@@/features/login/hooks/useLogin'

import useSignupFormValues from '@@/features/signup/hooks/useSignupFormValues'

import useFetcher from '@@/features/api/hooks/useFetcher'

import RequestBody from '@@/features/api/types/httpbody/request/Signup'
import ResponseBody from '@@/features/api/types/httpbody/response/Signup'

/* ⭐️ サインアップフック ⭐️ */
const useSignup = () => {
  const fetcher = useFetcher<RequestBody, ResponseBody>('signup', {
    method: 'POST',
    errors: {
      conflict: { key: 'email-Conflict', message: 'このメールアドレスはすでに使用されています' },
    },
  })

  const { error, isMutating, trigger } = useSWRMutation('/api/signup', fetcher)

  const { signupFormValues, resetSignupFormValues } = useSignupFormValues()
  const { login } = useLogin()

  const signup = async (): Promise<boolean> => {
    const result = await trigger({
      email: signupFormValues.email!,
      password: signupFormValues.password!,
      name: signupFormValues.username!,
      department_id: signupFormValues.departmentID!,
      grade: signupFormValues.grade!,
    })
    if (result) {
      await login(signupFormValues.email!, signupFormValues.password!)
      resetSignupFormValues()
    }
    return !!result
  }

  return {
    signup,
    isMutating,
    error,
  }
}

export default useSignup
