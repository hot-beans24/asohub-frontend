import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions, Controller } from 'react-hook-form'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import useFormStep from '@@/features/form/hooks/useFormStep'
import useEmailAvailability from '@@/features/signup/hooks/useEmailAvailability'

import useSignupFormValues from '@@/features/signup/hooks/useSignupFormValues'
import EmailFormValues from '@@/features/signup/types/EmailFormValues'

import Link from '@@/features/common/components/Link'

import Form from '@@/features/form/components/Form'
import FormButton from '@@/features/form/components/FormButton'
import FormText from '@@/features/form/components/FormText'
import TextField from '@@/features/form/components/TextField'

const EmailForm: FC = () => {
  const { nextStep } = useFormStep()
  const { signupFormValues, setSignupFormValues } = useSignupFormValues()
  const { fetchEmailAvailability, isLoading } = useEmailAvailability()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormValues>()

  const handleOnSubmit: SubmitHandler<EmailFormValues> = async (data) => {
    const isAvailable = await fetchEmailAvailability(data.email)
    if (isAvailable) {
      setSignupFormValues((prev) => ({ ...prev, ...data }))
      nextStep()
    }
  }

  const emailOptions: RegisterOptions<EmailFormValues, 'email'> = {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /^[0-9]{7}@s.asojuku.ac.jp$/,
      message: '@s.asojuku.ac.jpの形で入力してください',
    },
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormText>学校のメールアドレスを入力してください</FormText>
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
            error={errors.email?.message}
          />
        )}
      />
      <FormButton type="submit" icon={faArrowRight} isLoading={isLoading} isIconRight>
        Next
      </FormButton>
      <FormText>
        既にアカウントをお持ちの方は<Link to="/login">こちら</Link>
      </FormText>
    </Form>
  )
}

export default EmailForm
