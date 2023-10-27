import { FC, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'

import useGithubUser from '@@/features/github/hooks/useGithubUser'
import useLinkGithub from '@@/features/github/hooks/useLinkGithub'
import GithunUserForm from '@@/features/github/components/GithubUserForm'
import GithubUser from '@@/features/github/components/GithubUser'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import ROUTES from '@@/routes/routes'

const LinkGithubForm: FC = () => {
  const navigate = useNavigate()
  const { githubUser, resetGithubUser } = useGithubUser()
  const { linkGithub, isLoading } = useLinkGithub()
  const { setFlashMessages } = useFlashMessages()

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await linkGithub(githubUser!!.id)
    if (isSuccess) {
      navigate(ROUTES.HOME)
      setFlashMessages([{ key: 'linkGithubSuccess', type: 'success', message: 'Githubアカウントを連携しました' }])
    }
  }

  if (!githubUser) {
    return <GithunUserForm />
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormText>以下のユーザーで登録します</FormText>
      <GithubUser githubUserIcon={githubUser.icon} githubUserID={githubUser.id} githubUserName={githubUser.name} />
      <FormButtonFlex>
        <FormButton type="button" icon={faArrowLeft} color="gray" isHalfSize onClick={resetGithubUser}>
          Back
        </FormButton>
        <FormButton type="submit" icon={faGithub} isHalfSize isLoading={isLoading} color="black" isIconRight>
          OK
        </FormButton>
      </FormButtonFlex>
    </Form>
  )
}

export default LinkGithubForm
