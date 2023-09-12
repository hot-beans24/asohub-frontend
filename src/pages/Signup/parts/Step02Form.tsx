import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import Form from '@@/components/Form/Form'
import FormFieldGroup from '@@/components/Form/FormFieldGroup'
import TextField from '@@/components/Form/TextField'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'

import { SignupFormState, Step02FormValues } from '@@/pages/Signup/types/signupForm'

type Step02FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step02Form: FC<Step02FormProps> = ({ signupFormState: { setSignupFormValues }, nextStep, backStep }) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<Step02FormValues>()

  const handleOnSubmit: SubmitHandler<Step02FormValues> = (data) => {
    setSignupFormValues((prev) => ({ ...prev, ...data }))
    nextStep()
  }

  const handleOnBack = () => {
    backStep()
  }

  const passwordOptions: RegisterOptions<Step02FormValues, 'password'> = {
    required: 'パスワードを入力してください'
  }

  const confirmPasswordOptions: RegisterOptions<Step02FormValues, 'confirmPassword'> = {
    required: 'パスワード(確認用)を入力してください',
    validate: (confirmPassword) => {
      const password = getValues('password')
      return confirmPassword === password || 'パスワードが一致しません'
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormFieldGroup>
        <TextField
          label="パスワード"
          type="password"
          isPassword
          {...register('password', passwordOptions)}
          errorMessage={errors.password?.message}
        />
        <TextField
          label="パスワード(確認用)"
          type="password"
          isPassword
          {...register('confirmPassword', confirmPasswordOptions)}
          errorMessage={errors.confirmPassword?.message}
        />
      </FormFieldGroup>
      <ButtonGroup>
        <Button type="button" icon={faCaretLeft} onClick={handleOnBack} isNotPrimary isHalfSize>
          Back
        </Button>
        <Button type="submit" icon={faCaretRight} isIconRight isHalfSize>
          Next
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default Step02Form
