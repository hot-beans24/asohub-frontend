import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions,  } from 'react-hook-form'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'
import TextField from '@@/components/form/TextFiled'

import { SignupFormState } from '../types/signupForm'

type Step02FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step02Form: FC<Step02FormProps> = ({ signupFormState: { setSignupFormValues }, nextStep, backStep }) => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm<ValuesType>()

  type ValuesType = {
    password: string
    confirmPassword: string
  }

  const handleOnSubmit: SubmitHandler<ValuesType> = (data) => {
    setSignupFormValues((prev) => ({ ...prev, password: data.password }))
    nextStep()
  }

  const handleOnBack = () => {
    backStep()
  }

  const passwordOptions: RegisterOptions<ValuesType, 'password'> = {
    required: 'パスワードを入力してください'
  }

  const confirmPasswordOptions: RegisterOptions<ValuesType, 'confirmPassword'> = {
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
