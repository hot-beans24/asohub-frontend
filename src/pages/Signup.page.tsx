import { FC, useState, useEffect, ReactNode } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useModal } from 'react-hooks-use-modal'

import ModalBox from '@@/features/common/components/ModalBox'

import useFormStep from '@@/features/form/hooks/useFormStep'
import FormSteps from '@@/features/form/components/FormSteps'
import FormButton from '@@/features/form/components/FormButton'

import EmailForm from '@@/features/signup/components/EmailForm'
import PasswordForm from '@@/features/signup/components/PasswordForm'
import ProfileForm from '@@/features/signup/components/ProfileForm'
import DoSignupForm from '@@/features/signup/components/DoSignupForm'
import LinkGithubForm from '@@/features/github/components/LinkGithubForm'

import AuthContainer from '@@/features/layout/components/AuthContainer'
import Heading from '@@/features/common/components/Heading'

import ROUTES from '@@/routes/routes'

import styles from './Signup.styles'

/* ⭐️ サインアップページ ⭐️ */
const SignupPage: FC = () => {
  console.log('📘 サインアップ(/signup) page render')

  const navigate = useNavigate()
  const { formStep, resetFormStep } = useFormStep()
  const [isSuccess, setIsSuccess] = useState(false)

  const [Modal] = useModal('root', {
    initialValue: true,
    preventScroll: false,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  })

  // 🌐 ページ遷移時にフォームステップをリセット
  useEffect(() => {
    resetFormStep()
  }, [])

  const handleModalButtonClick = () => {
    navigate(ROUTES.LINK_REPOSITORIES)
  }

  const Forms: { [key: number]: ReactNode } = {
    1: <EmailForm />,
    2: <PasswordForm />,
    3: <ProfileForm />,
    4: <DoSignupForm />,
    5: <LinkGithubForm setIsSuccess={setIsSuccess} />,
  }

  return (
    <AuthContainer>
      <Heading>Signup</Heading>
      <FormSteps maxStep={5} />
      {Forms[formStep]}
      {isSuccess && (
        <Modal>
          <ModalBox message="GitHubアカウントの紐付けが完了しました">
            <p>このままGitHubリポジトリの連携を行いますか？</p>
            <FormButton onClick={handleModalButtonClick}>Yes</FormButton>
            <Link to={ROUTES.HOME} css={styles.link}>
              あとで行う
            </Link>
          </ModalBox>
        </Modal>
      )}
    </AuthContainer>
  )
}

export default SignupPage
