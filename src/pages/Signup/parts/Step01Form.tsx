import { FC } from 'react'
import { useForm, Controller, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import Link from '@@/features/common/components/Link'

import Form from '@@/features/form/components/Form'
import FormServerError from '@@/features/form/components/FormServerError'
import FormText from '@@/features/form/components/FormText'
import FormButton from '@@/features/form/components/FormButton'
import FormFieldGroup from '@@/features/form/components/FormFieldGroup'
import TextField from '@@/features/form/components/TextField'

import useEmailAvailability from '@@/features/signup/hooks/useEmailAvailability'
import { SignupFormState } from '@@/features/signup/types/formValues'

type Step01FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
}

const Step01Form: FC<Step01FormProps> = ({ signupFormState: { signupFormValues, setSignupFormValues }, nextStep }) => {
  const { fetchEmailAvailability, isLoading, error } = useEmailAvailability()

  type FormValues = {
    email: string
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleOnSubmit: SubmitHandler<FormValues> = async (data) => {
    const isAvailable = await fetchEmailAvailability(data.email)
    if (isAvailable && !error) {
      setSignupFormValues((prev) => ({ ...prev, ...data }))
      nextStep()
    }
  }

  const emailOptions: RegisterOptions<FormValues, 'email'> = {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /^[0-9]{7}@s.asojuku.ac.jp$/,
      message: '@s.asojuku.ac.jpの形で入力してください'
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        {error && <FormServerError error={error} />}
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
                error={errors.email?.message}
              />
            )}
          />
        </FormFieldGroup>
        <FormButton type="submit" icon={faCaretRight} isLoading={isLoading} isIconRight>
          Next
        </FormButton>
      </Form>
      <FormText>
        既にアカウントをお持ちの方は<Link to="/login">こちら</Link>
      </FormText>
    </>
  )
}

export default Step01Form
