import { FC, useEffect, FormEvent, Dispatch, SetStateAction } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import AttentionText from '@@/features/common/components/AttentionText'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'

import useGithubUser from '@@/features/github/hooks/useGithubUser'
import useLinkGithub from '@@/features/github/hooks/useLinkGithub'
import GithunUserForm from '@@/features/github/components/GithubUserForm'
import GithubUser from '@@/features/github/components/GithubUser'

type LinkGithubFormProps = {
  setIsSuccess: Dispatch<SetStateAction<boolean>>
}

const LinkGithubForm: FC<LinkGithubFormProps> = ({ setIsSuccess }) => {
  const { githubUser, resetGithubUser } = useGithubUser()
  const { linkGithub, isMutating } = useLinkGithub()

  useEffect(() => {
    resetGithubUser()
  }, [])

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await linkGithub(githubUser!!.id)
    if (isSuccess) {
      resetGithubUser()
      setIsSuccess(true)
    }
  }

  if (!githubUser) {
    return <GithunUserForm />
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormText>以下のユーザーで登録します</FormText>
      <AttentionText text="製作中のため現在はGitHubアカウントの変更はできません" />
      <GithubUser githubUserIcon={githubUser.icon} githubUserID={githubUser.id} githubUserName={githubUser.name} />
      <FormButtonFlex>
        <FormButton type="button" icon={faArrowLeft} color="gray" isHalfSize onClick={resetGithubUser}>
          Back
        </FormButton>
        <FormButton type="submit" icon={faGithub} isHalfSize isLoading={isMutating} color="black" isIconRight>
          OK
        </FormButton>
      </FormButtonFlex>
    </Form>
  )
}

export default LinkGithubForm
