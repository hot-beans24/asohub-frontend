import { FC } from 'react'

import Heading from '@@/components/Heading'
import Steps from '@@/pages/Signup/components/Steps'

import { useWizard } from './useWizard'
import Step01Form from './forms/Step01Form'
import Step02Form from './forms/Step02Form'
import Step03Form from './forms/Step03Form'
import Step04Form from './forms/Step04Form'

import { box } from './style'

const SignupPage: FC = () => {
  const { step, nextStep, backStep } = useWizard()

  return (
    <div css={box}>
      <Heading>Signup</Heading>
      <Steps step={step} />
      {step === 1 && <Step01Form nextStep={nextStep} />}
      {step === 2 && <Step02Form nextStep={nextStep} backStep={backStep} />}
      {step === 3 && <Step03Form nextStep={nextStep} backStep={backStep} />}
      {step === 4 && <Step04Form nextStep={nextStep} backStep={backStep} />}
    </div>
  )
}

export default SignupPage
