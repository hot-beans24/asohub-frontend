import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { Form, FormFieldGroup, ImageFileField, Textarea } from '@@/components/Form'
import Button from '@@/components/Button'

import Skip from '@@/pages/Signup/components/Skip'
import { Step05FormValues } from '@@/pages/Signup/types/signupForm'

type Step05FormProps = {
  nextStep: () => void
}

const Step05Form: FC<Step05FormProps> = ({ nextStep }) => {
  const {
    register,
    handleSubmit
  } = useForm<Step05FormValues>()

  const handleOnSubmit: SubmitHandler<Step05FormValues> = (data) => {
    console.dir(data)
    nextStep()
  }


  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <Skip nextStep={nextStep} />
      <FormFieldGroup>
        <ImageFileField
          label="アイコン"
          {...register('iconImage')}
        />
        <Textarea
          label="プロフィール"
          {...register('profileBio')}
        />
      </FormFieldGroup>
      <Button type="submit" icon={faCircleCheck}>
        Save
      </Button>
    </Form>
  )
}

export default Step05Form
