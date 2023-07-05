import { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'

import { signupFormState } from '@@/recoil/atom/signupFormState'

import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import TextField from '@@/components/form/TextFiled'

import { Step01ValuesType, emailOptions } from '../options'

type Step01FormProps = {
  nextStep: () => void
}

const Step01Form: FC<Step01FormProps> = ({ nextStep }) => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<Step01ValuesType>()
  const [signupFormValues, setSignupFormValues] = useRecoilState(signupFormState)

  const handleOnSubmit: SubmitHandler<Step01ValuesType> = (data) => {
    setSignupFormValues({ ...signupFormValues, email: data.email })
    nextStep()
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