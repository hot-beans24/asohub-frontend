import { FC } from 'react'

import Heading from '@@/components/Heading'
import Link from '@@/components/Link'
import Steps from '@@/pages/Signup/components/Steps'

import { useWizard } from './hooks/useWizard'
import { useSignupFormState } from './hooks/useSignupFormState'
import Step01Form from './forms/Step01Form'
import Step02Form from './forms/Step02Form'
import Step03Form from './forms/Step03Form'
import Step04Form from './forms/Step04Form'

import { box, text } from './styles'

export type SignupFormType = {
  email: string
  username: string
  password: string
  department: number
  grade: number
}

const SignupPage: FC = () => {
  const { step, nextStep, backStep } = useWizard()

  const {signupFormValues, setSignupFormValues} = useSignupFormState()

  return (
    <div css={box}>
      <Heading>Signup</Heading>
      <Steps step={step} />
      {step === 1 && <Step01Form signupFormValues={signupFormValues} setSignupFormValues={setSignupFormValues} nextStep={nextStep} />}
      {step === 2 && <Step02Form setSignupFormValues={setSignupFormValues} nextStep={nextStep} backStep={backStep} />}
      {step === 3 && <Step03Form signupFormValues={signupFormValues} setSignupFormValues={setSignupFormValues} nextStep={nextStep} backStep={backStep} />}
      {step === 4 && <Step04Form signupFormValues={signupFormValues} nextStep={nextStep} backStep={backStep} />}

      {step === 1 && <p css={text}>既にアカウントをお持ちの方は<Link to="/login">こちら</Link></p>}
    </div>
  )
}

export default SignupPage
