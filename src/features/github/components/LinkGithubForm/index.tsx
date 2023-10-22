import { FC, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormServerError from '@@/features/form/components/FormServerError'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'

import useGithubUser from '@@/features/github/hooks/useGithubUser'
import useLinkGithub from '@@/features/github/hooks/useLinkGithub'
import GithunUserForm from '@@/features/github/components/GithubUserForm'
import GithubUser from '@@/features/github/components/GithubUser'



const LinkGithubForm: FC = () => {
  const navigate = useNavigate()
  const { githubUser, resetGithubUser } = useGithubUser()
  const { linkGithub, isLoading, error } = useLinkGithub()

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await linkGithub(githubUser!!.id)
    if (isSuccess) {
      navigate('/home')
    }
  }

  if (!githubUser) {
    return <GithunUserForm />
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormText>以下のユーザーで登録します</FormText>
      {error && <FormServerError error={error} />}
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
