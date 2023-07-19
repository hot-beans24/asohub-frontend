import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { signupFormState } from '@@/recoil/atom/signupFormState'

import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'
import TextField from '@@/components/form/TextFiled'

import { Step02ValuesType, passwordOptions, confirmPasswordOptions } from '../options'

type Step02FormProps = {
  nextStep: () => void
  backStep: () => void
}

const Step02Form: FC<Step02FormProps> = ({ nextStep, backStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Step02ValuesType>()
  const [signupFormValues, setSignupFormValues] = useRecoilState(signupFormState)

  const handleOnSubmit: SubmitHandler<Step02ValuesType> = (data) => {
    setSignupFormValues({ ...signupFormValues, password: data.password })
    nextStep()
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
        <Button type="button" icon={faCaretLeft} onClick={() => backStep()} isNotPrimary isHalfSize>
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
