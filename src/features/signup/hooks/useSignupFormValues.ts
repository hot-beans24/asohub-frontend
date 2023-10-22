import { useRecoilState, useResetRecoilState } from 'recoil'

import recoilSignupFormValues from '../recoil/signupFormValues'

/* ⭐️ サインアップフォームステートフック ⭐️ */
const useSignupFormValues = () => {
  // 🌐 サインアップフォームステート
  const [signupFormValues, setSignupFormValues] = useRecoilState(recoilSignupFormValues)
  // 🌐 サインアップフォームステートをリセット
  const resetSignupFormValues = useResetRecoilState(recoilSignupFormValues)

  return {
    signupFormValues,
    setSignupFormValues,
    resetSignupFormValues,
  }
}

export default useSignupFormValues
