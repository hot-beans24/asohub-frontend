import { useRecoilState, useResetRecoilState } from 'recoil'
import { useEffect } from 'react'

import recoilSignupFormValues from '@@/features/signup/recoil/signupFormValues'

/* ⭐️ サインアップフォームステートフック ⭐️ */
const useSignupFormValues = () => {
  // 🌐 サインアップフォームステート
  const [signupFormValues, setSignupFormValues] = useRecoilState(recoilSignupFormValues)
  // 🌐 サインアップフォームステートをリセット
  const resetSignupFormValues = useResetRecoilState(recoilSignupFormValues)

  useEffect(() => {
    console.log('🎁 signupFormValues')
    console.log(signupFormValues)
  }, [signupFormValues])

  return {
    signupFormValues,
    setSignupFormValues,
    resetSignupFormValues,
  }
}

export default useSignupFormValues
