import { FC } from 'react'
import { useForm, Controller, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import Link from '@@/components/Link'
import { Form, FormFieldGroup, TextField } from '@@/components/Form'
import Button from '@@/components/Button'

import { SignupFormState, Step01FormValues } from '@@/pages/Signup/types/signupForm'
import { text } from './styles'

type Step01FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
}

const Step01Form: FC<Step01FormProps> = ({ signupFormState: { signupFormValues, setSignupFormValues }, nextStep }) => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<Step01FormValues>()

  const handleOnSubmit: SubmitHandler<Step01FormValues> = (data) => {
    setSignupFormValues((prev) => ({ ...prev, ...data }))
    nextStep()
  }

  const emailOptions: RegisterOptions<Step01FormValues, 'email'> = {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /^[0-9]{7}@s.asojuku.ac.jp$/,
      message: 'メールアドレスの形式が正しくありません'
    }
  }

  return (
    <>
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormFieldGroup>
        <Controller
          name="email"
          control={control}
          defaultValue={signupFormValues.email}
          render={({ field }) => (
            <TextField
              label="メールアドレス"
              type="email"
              {...field}
              {...register('email', emailOptions)}
              errorMessage={errors.email?.message}
            />
          )}
        />
      </FormFieldGroup>
      <Button type="submit" icon={faCaretRight} isIconRight>
        Next
      </Button>
    </Form>
    <p css={text}>既にアカウントをお持ちの方は<Link to="/login">こちら</Link></p>
    </>
  )
}

export default Step01Form
