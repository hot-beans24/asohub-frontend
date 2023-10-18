import { FC } from 'react'
import { useForm, Controller, SubmitHandler, RegisterOptions } from 'react-hook-form'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import Form from '@@/features/form/components/Form'
import FormButton from '@@/features/form/components/FormButton'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormFieldGroup from '@@/features/form/components/FormFieldGroup'
import TextField from '@@/features/form/components/TextField'
import SelectField from '@@/features/form/components/SelectField'

import SignupFormState from '@@/features/signup/types/SignupFormState'
import departmentSelectOpts from '@@/features/signup/data/departmentSelectOpts'
import gradeSelectOpts from '@@/features/signup/data/gradeSelectOpts'

type Step03FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step03Form: FC<Step03FormProps> = ({
  signupFormState: { signupFormValues, setSignupFormValues },
  nextStep,
  backStep,
}) => {
  type FormValues = {
    username: string
    departmentID: number
    grade: number
  }

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
    setSignupFormValues((prev) => ({ ...prev, ...data }))
    nextStep()
  }

  const usernameOptions: RegisterOptions<FormValues, 'username'> = {
    required: 'ユーザー名を入力してください',
  }

  const departmentIDOptions: RegisterOptions<FormValues, 'departmentID'> = {
    required: '学科を選択してください',
  }

  const gradeOptions: RegisterOptions<FormValues, 'grade'> = {
    required: '学年を選択してください',
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
              error={errors.username?.message}
            />
          )}
        />
        <SelectField
          label="学科"
          options={departmentSelectOpts}
          defaultValue={signupFormValues.departmentID}
          {...register('departmentID', departmentIDOptions)}
          error={errors.departmentID?.message}
        />
        <SelectField
          label="学年"
          options={gradeSelectOpts.slice(
            0,
            departmentSelectOpts[watch('departmentID', signupFormValues.departmentID) - 1].maxGrade,
          )}
          defaultValue={signupFormValues.grade}
          {...register('grade', gradeOptions)}
          error={errors.grade?.message}
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

export default Step03Form
