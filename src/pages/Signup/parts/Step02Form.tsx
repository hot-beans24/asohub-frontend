import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import Form from '@@/features/form/components/Form'
import FormButton from '@@/features/form/components/FormButton'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormFieldGroup from '@@/features/form/components/FormFieldGroup'
import TextField from '@@/features/form/components/TextField'

import { SignupFormState } from '@@/features/signup/types/formValues'

type Step02FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step02Form: FC<Step02FormProps> = ({ signupFormState: { setSignupFormValues }, nextStep, backStep }) => {
  type FormValues = {
    password: string
    confirmPassword: string
  }

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
    setSignupFormValues((prev) => ({ ...prev, ...data }))
    nextStep()
  }

  const passwordOptions: RegisterOptions<FormValues, 'password'> = {
    required: 'パスワードを入力してください'
  }

  const confirmPasswordOptions: RegisterOptions<FormValues, 'confirmPassword'> = {
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
          error={errors.password?.message}
        />
        <TextField
          label="パスワード(確認用)"
          type="password"
          isPassword
          {...register('confirmPassword', confirmPasswordOptions)}
          error={errors.confirmPassword?.message}
        />
      </FormFieldGroup>
      <FormButtonFlex>
        <FormButton type="button" icon={faCaretLeft} onClick={backStep} color="gray" isHalfSize>
          Back
        </FormButton>
        <FormButton type="submit" icon={faCaretRight} isIconRight isHalfSize>
          Next
        </FormButton>
      </FormButtonFlex>
    </Form>
  )
}

export default Step02Form
