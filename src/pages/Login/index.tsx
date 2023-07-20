import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Heading from '@@/components/Heading'
import Link from '@@/components/Link'
import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import TextField from '@@/components/form/TextFiled'

import { box, text } from './styles'

const LoginPage: FC = () => {
  type ValuesType = {
    email: string
    password: string
  }

  const { register, handleSubmit, formState: { errors } } = useForm<ValuesType>()

  const handleOnSubmit: SubmitHandler<ValuesType> = (data) => {
    console.log(data)
  }

  const emailOptions: RegisterOptions<ValuesType, 'email'> = {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /^[0-9]{7}@s.asojuku.ac.jp$/,
      message: 'メールアドレスの形式が正しくありません'
    }
  }

  const passwordOptions: RegisterOptions<ValuesType, 'password'> = {
    required: 'パスワードを入力してください'
  }

  return (
    <div css={box}>
      <Heading>Login</Heading>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <FormFieldGroup>
          <TextField
            label="メールアドレス"
            type="email"
            {...register('email', emailOptions)}
            errorMessage={errors.email?.message}
          />
          <TextField
            label="パスワード"
            type="password"
            maxLength={20}
            isPassword
            {...register('password', passwordOptions)}
            errorMessage={errors.password?.message}
          />
        </FormFieldGroup>
        <Button type="submit" icon={faEnvelope}>
          Login with Email
        </Button>
      </Form>
      <p css={text}>
        アカウントをお持ちでない方は<Link to="/signup">こちら</Link>
      </p>
    </div>
  )
}

export default LoginPage
