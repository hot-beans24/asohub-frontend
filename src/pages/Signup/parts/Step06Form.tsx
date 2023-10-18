import { FC, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { Img } from 'react-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import githubUsernameRegex from 'github-username-regex'

import Form from '@@/features/form/components/Form'
import TextField from '@@/features/form/components/TextField'
import FormServerError from '@@/features/form/components/FormServerError'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'

import useGithubUserState from '@@/features/github/hooks/useGithubUser'
import useLinkGithub from '@@/features/github/hooks/useLinkGithub'

import { githubUser as a, githubUserIconWrapper, githubUserIcon, githubUserID, githubUserName } from './styles'

type Step06FormProps = {
  nextStep: () => void
}

const Step05Form: FC<Step06FormProps> = () => {
  const navigate = useNavigate()
  const {
    fetchGithubUser,
    clearGithubUserState,
    githubUser,
    isLoading: isLoadingA,
    error: errorA,
  } = useGithubUserState()
  const { linkGithub, isLoading: isLoadingB, error: errorB, setError: setErrorB } = useLinkGithub()

  type FormValues = {
    githubUserID: string
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const handleOnUserCheck: SubmitHandler<FormValues> = async (data) => {
    fetchGithubUser(data.githubUserID)
  }

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await linkGithub(githubUser.id)
    if (isSuccess) {
      navigate('/home')
    }
  }

  const handleNoClick = () => {
    clearGithubUserState()
    setErrorB(null)
  }
  const githubUserIDOptions: RegisterOptions<FormValues, 'githubUserID'> = {
    required: 'GithubユーザーIDを入力してください',
    validate: (id) => {
      return githubUsernameRegex.test(id) || 'IDの形式が正しくありません'
    },
  }

  if (githubUser.id) {
    return (
      <Form onSubmit={handleOnSubmit}>
        {errorB && <FormServerError error={errorB} />}
        <div css={a}>
          <div css={githubUserIconWrapper}>
            <Img
              css={githubUserIcon}
              src={githubUser.icon}
              loader={<FontAwesomeIcon icon={faSpinner} style={{ fontSize: 24, color: '#d9d9d9' }} spin />}
              alt="github user icon"
            />
          </div>
          <span css={githubUserName}>{githubUser.name}</span>
          <span css={githubUserID}>{githubUser.id}</span>
        </div>
        <FormButtonFlex>
          <FormButton type="button" icon={faXmark} color="gray" isHalfSize onClick={handleNoClick}>
            NO
          </FormButton>
          <FormButton type="submit" icon={faThumbsUp} isHalfSize isLoading={isLoadingB} color="black" isIconRight>
            YES
          </FormButton>
        </FormButtonFlex>
      </Form>
    )
  }

  return (
    <Form onSubmit={handleSubmit(handleOnUserCheck)}>
      {errorA && <FormServerError error={errorA} />}
      <Controller
        name="githubUserID"
        control={control}
        defaultValue={githubUser.id}
        render={({ field }) => (
          <TextField
            label="GitHubアカウントID"
            type="text"
            {...field}
            {...register('githubUserID', githubUserIDOptions)}
            error={errors.githubUserID?.message}
          />
        )}
      />
      <FormButton type="submit" icon={faGithub} color="black" isLoading={isLoadingA}>
        Check
      </FormButton>
    </Form>
  )
}

export default Step05Form
