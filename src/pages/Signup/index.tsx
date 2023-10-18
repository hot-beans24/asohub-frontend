import { FC } from 'react'

import Heading from '@@/features/common/components/Heading'

import AuthContainer from '@@/features/layout/components/AuthContainer'

import Steps from '@@/pages/Signup/components/Steps'

import { useWizard } from '@@/pages/Signup/hooks/useWizard'
import { useSignupFormState } from '@@/pages/Signup/hooks/useSignupFormState'
import Step01Form from '@@/pages/Signup/parts/Step01Form'
import Step02Form from '@@/pages/Signup/parts/Step02Form'
import Step03Form from '@@/pages/Signup/parts/Step03Form'
import Step04Form from '@@/pages/Signup/parts/Step04Form'
import Step06Form from '@@/pages/Signup/parts/Step06Form'

const SignupPage: FC = () => {
  const signupFormState = useSignupFormState()
  const { step, nextStep, backStep } = useWizard()

  return (
    <AuthContainer>
      <Heading>Signup</Heading>
      <Steps step={step} />
      {step === 1 && <Step01Form signupFormState={signupFormState} nextStep={nextStep} />}
      {step === 2 && <Step02Form signupFormState={signupFormState} nextStep={nextStep} backStep={backStep} />}
      {step === 3 && <Step03Form signupFormState={signupFormState} nextStep={nextStep} backStep={backStep} />}
      {step === 4 && <Step04Form signupFormState={signupFormState} nextStep={nextStep} backStep={backStep} />}
      {/* {step === 5 && <Step05Form nextStep={nextStep} />} 一旦非表示 */}
      {step === 5 && <Step06Form nextStep={nextStep} />}
    </AuthContainer>
  )
}

export default SignupPage
