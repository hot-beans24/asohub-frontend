import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions, Controller } from 'react-hook-form'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import githubUsernameRegex from 'github-username-regex'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormServerError from '@@/features/form/components/FormServerError'
import FormButton from '@@/features/form/components/FormButton'
import TextField from '@@/features/form/components/TextField'

import useGithubUser from '@@/features/github/hooks/useGithubUser'
import GithubUserFormValues from '@@/features/github/types/GithubUserFormValues'

const GithunUserForm: FC = () => {
  const { fetchGithubUser, githubUser, isLoading, error } = useGithubUser()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GithubUserFormValues>()

  const handleOnSubmit: SubmitHandler<GithubUserFormValues> = async (data) => {
    await fetchGithubUser(data.githubUserID)
  }

  const githubUserIDOptions: RegisterOptions<GithubUserFormValues, 'githubUserID'> = {
    required: 'GithubユーザーIDを入力してください',
    validate: (id) => {
      return githubUsernameRegex.test(id) || 'IDの形式が正しくありません'
    },
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormText>GitHubアカウントと連携してください</FormText>
      {error && <FormServerError error={error} />}
      <Controller
        name="githubUserID"
        control={control}
        defaultValue={githubUser?.id || ''}
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
      <FormButton type="submit" icon={faGithub} color="black" isLoading={isLoading}>
        Check
      </FormButton>
    </Form>
  )
}

export default GithunUserForm
