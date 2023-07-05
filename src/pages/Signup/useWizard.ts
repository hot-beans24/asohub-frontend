import { useState } from 'react'

export const useWizard = () => {
  const [step, setStep] = useState<number>(1)

  const nextStep = () => {
    setStep(prev => prev + 1)
  }

  const backStep = () => {
    setStep(prev => prev - 1)
  }

  return {
    step,
    nextStep,
    backStep
  }
}