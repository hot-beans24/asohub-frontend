import { FC } from 'react'
import { useForm, Controller, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'
import TextField from '@@/components/form/TextFiled'
import SelectField from '@@/components/form/SelectField'

import { SignupFormState } from '../types/signupForm'
import { departmentSelectOpts, gradeSelectOpts } from '../data/selectOptions'

type Step03FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step03Form: FC<Step03FormProps> = ({ signupFormState: { signupFormValues, setSignupFormValues }, nextStep, backStep }) => {
  type ValuesType = {
    username: string
    department: number
    grade: number
  }

  const { control, register, watch, handleSubmit, formState: { errors } } = useForm<ValuesType>()

  const handleOnSubmit: SubmitHandler<ValuesType> = (data) => {
    setSignupFormValues((prev) => ({
      ...prev,
      username: data.username,
      department: data.department,
      grade: data.grade
    }))
    nextStep()
  }

  const handleOnBack = () => {
    backStep()
  }

  const usernameOptions: RegisterOptions<ValuesType, 'username'> = {
    required: 'ユーザー名を入力してください'
  }

  const departmentOptions: RegisterOptions<ValuesType, 'department'> = {
    required: '学科を選択してください'
  }

  const gradeOptions: RegisterOptions<ValuesType, 'grade'> = {
    required: '学年を選択してください'
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormFieldGroup>
        <Controller
          name="username"
          control={control}
          defaultValue={signupFormValues.username}
          render={({ field }) => (
            <TextField
              label="ユーザー名"
              type="text"
              {...field}
              {...register('username', usernameOptions)}
              errorMessage={errors.username?.message}
            />
          )}
        />
        <SelectField
          label="学科"
          options={departmentSelectOpts}
          defaultValue={signupFormValues.department}
          {...register('department', departmentOptions)}
          errorMessage={errors.department?.message}
        />
        <SelectField
          label="学年"
          options={gradeSelectOpts.slice(0, departmentSelectOpts[watch('department', 1) - 1].maxGrade)}
          defaultValue={signupFormValues.grade}
          {...register('grade', gradeOptions)}
          errorMessage={errors.grade?.message}
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

export default Step03Form
