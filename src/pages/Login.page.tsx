import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import ROUTES from '@@/routes/routes'

import Heading from '@@/features/common/components/Heading'
import Link from '@@/features/common/components/Link'

import AuthContainer from '@@/features/layout/components/AuthContainer'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormButton from '@@/features/form/components/FormButton'
import FormServerError from '@@/features/form/components/FormServerError'
import TextField from '@@/features/form/components/TextField'

import useLogin from '@@/features/login/hooks/useLogin'

/* ⭐️ ログインページ : 完 ⭐️ */
const LoginPage: FC = () => {
  const nagiagte = useNavigate()
  const { login, isLoading, error } = useLogin()

  type FormValues = {
    email: string
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const handleOnSubmit: SubmitHandler<FormValues> = async (data) => {
    const isSuccess = await login(data.email, data.password)
    if (isSuccess) {
      nagiagte(ROUTES.HOME, {
        state: {
          flashMessages: [
            {
              key: 'loginSuccess',
              type: 'success',
              message: 'ログインしました',
            },
          ],
        },
      })
    }
  }

  const emailOptions: RegisterOptions<FormValues, 'email'> = {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /^[0-9]{7}@s.asojuku.ac.jp$/,
      message: '@s.asojuku.ac.jpの形で入力してください',
    },
  }

  const passwordOptions: RegisterOptions<FormValues, 'password'> = {
    required: 'パスワードを入力してください',
  }

  return (
    <AuthContainer>
      <Heading>Login</Heading>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        {error && <FormServerError error={error} />}
        <TextField
          label="メールアドレス"
          type="email"
          {...register('email', emailOptions)}
          error={errors.email?.message}
        />
        <TextField
          label="パスワード"
          type="password"
          maxLength={20}
          isPassword
          {...register('password', passwordOptions)}
          error={errors.password?.message}
        />
        <FormButton type="submit" icon={faEnvelope} isLoading={isLoading}>
          Login with Email
        </FormButton>
        <FormText>
          アカウントをお持ちでない方は<Link to="/signup">こちら</Link>
        </FormText>
      </Form>
    </AuthContainer>
  )
}

export default LoginPage
