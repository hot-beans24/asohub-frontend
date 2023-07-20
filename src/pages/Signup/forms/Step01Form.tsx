import { FC } from 'react'
import { useForm, Controller, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { signupFormState } from '@@/recoil/atom/signupFormState'

import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import TextField from '@@/components/form/TextFiled'

type Step01FormProps = {
  nextStep: () => void
}

const Step01Form: FC<Step01FormProps> = ({ nextStep }) => {
  const [signupFormValues, setSignupFormValues] = useRecoilState(signupFormState)

  type ValuesType = {
    email: string
  }

  const { control, register, handleSubmit, formState: { errors } } = useForm<ValuesType>()

  const handleOnSubmit: SubmitHandler<ValuesType> = (data) => {
    setSignupFormValues({ ...signupFormValues, email: data.email })
    nextStep()
  }

  const emailOptions: RegisterOptions<ValuesType, 'email'> = {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /^[0-9]{7}@s.asojuku.ac.jp$/,
      message: 'メールアドレスの形式が正しくありません'
    }
  }

  return (
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
  )
}

export default Step01Form
