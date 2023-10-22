import { useRecoilState, useResetRecoilState } from 'recoil'

import recoilFormStep from '@@/features/form/recoil/formStep'

/* ⭐️ フォームステップフック ⭐️ */
const useFormStep = () => {
  // 🌐 ステップステート
  const [formStep, setFormStep] = useRecoilState(recoilFormStep)
  // 🌐 ステップをリセットする
  const resetFormStep = useResetRecoilState(recoilFormStep)

  // 🌐 次のステップに進む
  const nextStep = () => {
    setFormStep((prev) => prev + 1)
  }

  // 🌐 前のステップに戻る
  const backStep = () => {
    setFormStep((prev) => prev - 1)
  }

  return {
    formStep,
    nextStep,
    backStep,
    resetFormStep,
  }
}

export default useFormStep
