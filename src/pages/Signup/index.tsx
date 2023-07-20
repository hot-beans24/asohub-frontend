import { FC } from 'react'

import Heading from '@@/components/Heading'
import Link from '@@/components/Link'

import Steps from '@@/pages/Signup/components/Steps'

import { useWizard } from '@@/pages/Signup/hooks/useWizard'
import { useSignupFormState } from '@@/pages/Signup/hooks/useSignupFormState'
import Step01Form from '@@/pages/Signup/parts/Step01Form'
import Step02Form from '@@/pages/Signup/parts/Step02Form'
import Step03Form from '@@/pages/Signup/parts/Step03Form'
import Step04Form from '@@/pages/Signup/parts/Step04Form'

import { box, text } from './styles'

export type SignupFormType = {
  email: string
  username: string
  password: string
  department: number
  grade: number
}

const SignupPage: FC = () => {
  const signupFormState = useSignupFormState()
  const { step, nextStep, backStep } = useWizard()

  return (
    <div css={box}>
      <Heading>Signup</Heading>
      <Steps step={step} />
      {step === 1 && <Step01Form signupFormState={signupFormState} nextStep={nextStep} />}
      {step === 2 && <Step02Form signupFormState={signupFormState} nextStep={nextStep} backStep={backStep} />}
      {step === 3 && <Step03Form signupFormState={signupFormState} nextStep={nextStep} backStep={backStep} />}
      {step === 4 && <Step04Form signupFormState={signupFormState} nextStep={nextStep} backStep={backStep} />}

      {step === 1 && <p css={text}>既にアカウントをお持ちの方は<Link to="/login">こちら</Link></p>}
    </div>
  )
}

export default SignupPage
