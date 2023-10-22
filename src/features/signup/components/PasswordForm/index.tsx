import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import useFormStep from '@@/features/form/hooks/useFormStep'

import useSignupFormValues from '@@/features/signup/hooks/useSignupFormValues'
import PasswordFormValues from '@@/features/signup/types/PasswordFormValues'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'
import TextField from '@@/features/form/components/TextField'

const PasswordForm: FC = () => {
  const { nextStep, backStep } = useFormStep()
  const { setSignupFormValues } = useSignupFormValues()

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormValues>()

  const handleOnSubmit: SubmitHandler<PasswordFormValues> = (data) => {
    setSignupFormValues((prev) => ({ ...prev, ...data }))
    nextStep()
  }

  const passwordOptions: RegisterOptions<PasswordFormValues, 'password'> = {
    required: 'パスワードを入力してください',
  }

  const confirmPasswordOptions: RegisterOptions<PasswordFormValues, 'confirmPassword'> = {
    required: 'パスワード(確認用)を入力してください',
    validate: (confirmPassword) => {
      const password = getValues('password')
      return confirmPassword === password || 'パスワードが一致しません'
    },
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormText>パスワードを入力してください</FormText>
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
      <FormButtonFlex>
        <FormButton type="button" icon={faArrowLeft} onClick={backStep} color="gray" isHalfSize>
          Back
        </FormButton>
        <FormButton type="submit" icon={faArrowRight} isIconRight isHalfSize>
          Next
        </FormButton>
      </FormButtonFlex>
    </Form>
  )
}

export default PasswordForm
