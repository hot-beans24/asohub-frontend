import { FC, useEffect, ReactNode } from 'react'

import useFormStep from '@@/features/form/hooks/useFormStep'
import FormSteps from '@@/features/form/components/FormSteps'

import EmailForm from '@@/features/signup/components/EmailForm'
import PasswordForm from '@@/features/signup/components/PasswordForm'
import ProfileForm from '@@/features/signup/components/ProfileForm'
import DoSignupForm from '@@/features/signup/components/DoSignupForm'
import LinkGithubForm from '@@/features/github/components/LinkGithubForm'

import AuthContainer from '@@/features/layout/components/AuthContainer'
import Heading from '@@/features/common/components/Heading'

/* ⭐️ サインアップページ ⭐️ */
const SignupPage: FC = () => {
  const { formStep, resetFormStep } = useFormStep()

  // 🌐 ページ遷移時にフォームステップをリセット
  useEffect(() => {
    resetFormStep()
  }, [])

  const Forms: { [key: number]: ReactNode } = {
    1: <EmailForm />,
    2: <PasswordForm />,
    3: <ProfileForm />,
    4: <DoSignupForm />,
    5: <LinkGithubForm />,
  }

  return (
    <AuthContainer>
      <Heading>Signup</Heading>
      <FormSteps maxStep={5} />
      {Forms[formStep]}
    </AuthContainer>
  )
}

export default SignupPage
