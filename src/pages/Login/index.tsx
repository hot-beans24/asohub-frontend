import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Layout from '@@/components/Layout'
import Heading from '@@/components/Heading'
import Link from '@@/components/Link'
import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import TextField from '@@/components/form/TextFiled'

import { ValuesType, emailOptions, passwordOptions } from './options'
import { box, text } from './style'

const LoginPage: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ValuesType>()

  const handleOnSubmit: SubmitHandler<ValuesType> = (data) => {
    console.log(data)
  }

  return (
    <Layout>
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
    </Layout>
  )
}

export default LoginPage