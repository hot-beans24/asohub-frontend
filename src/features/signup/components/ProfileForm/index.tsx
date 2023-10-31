import { FC } from 'react'
import { useForm, SubmitHandler, RegisterOptions, Controller } from 'react-hook-form'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import useFormStep from '@@/features/form/hooks/useFormStep'

import useSignupFormValues from '@@/features/signup/hooks/useSignupFormValues'
import ProfileFormValues from '@@/features/signup/types/ProfileFormValues'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'
import TextField from '@@/features/form/components/TextField'
import SelectField from '@@/features/form/components/SelectField'

import departmentSelectOpts from '@@/features/signup/data/departmentSelectOpts'
import gradeSelectOpts from '@@/features/signup/data/gradeSelectOpts'

const Step03Form: FC = () => {
  const { nextStep, backStep } = useFormStep()
  const { signupFormValues, setSignupFormValues } = useSignupFormValues()

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>()

  const handleOnSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    setSignupFormValues((prev) => ({ ...prev, ...data }))
    nextStep()
  }

  const usernameOptions: RegisterOptions<ProfileFormValues, 'username'> = {
    required: 'ユーザー名を入力してください',
    maxLength: { value: 20, message: 'ユーザー名は20文字以内で入力してください' }
  }

  const departmentIDOptions: RegisterOptions<ProfileFormValues, 'departmentID'> = {
    required: '学科を選択してください',
  }

  const gradeOptions: RegisterOptions<ProfileFormValues, 'grade'> = {
    required: '学年を選択してください',
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormText>ユーザー情報を入力してください</FormText>
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
          departmentSelectOpts[watch('departmentID', signupFormValues.departmentID) - 1].maxGrade
        )}
        defaultValue={signupFormValues.grade}
        {...register('grade', gradeOptions)}
        error={errors.grade?.message}
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

export default Step03Form
