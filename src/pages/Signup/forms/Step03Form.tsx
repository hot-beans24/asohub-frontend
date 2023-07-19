import { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { signupFormState } from '@@/recoil/atom/signupFormState'

import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'
import TextField from '@@/components/form/TextFiled'
import SelectField from '@@/components/form/SelectField'

import {
  Step03ValuesType,
  usernameOptions,
  departmentOptions,
  gradeOptions,
  departmentSelectOpts,
  gradeSelectOpts
} from '../options'

type Step03FormProps = {
  nextStep: () => void
  backStep: () => void
}

const Step03Form: FC<Step03FormProps> = ({ nextStep, backStep }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Step03ValuesType>()
  const [signupFormValues, setSignupFormValues] = useRecoilState(signupFormState)

  const handleOnSubmit: SubmitHandler<Step03ValuesType> = (data) => {
    setSignupFormValues({
      ...signupFormValues,
      username: data.username,
      department: Number(data.department),
      grade: Number(data.grade)
    })
    nextStep()
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
          options={gradeSelectOpts}
          defaultValue={signupFormValues.grade}
          {...register('grade', gradeOptions)}
          errorMessage={errors.grade?.message}
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

export default Step03Form
