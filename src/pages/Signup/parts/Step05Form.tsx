import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import Form from '@@/features/form/components/Form'
import FormButton from '@@/features/form/components/FormButton'
import FormFieldGroup from '@@/features/form/components/FormFieldGroup'
import ImageFileField from '@@/features/form/components/ImageFileField'
import Textarea from '@@/features/form/components/Textarea'

type Step05FormProps = {
  nextStep: () => void
}

const Step05Form: FC<Step05FormProps> = ({ nextStep }) => {
  type FormValues = {
    iconImage: FileList
    profileBio: string
  }

  const { register, handleSubmit } = useForm<FormValues>()

  const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
    console.dir(data)
    nextStep()
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormFieldGroup>
        <ImageFileField label="アイコン" {...register('iconImage')} />
        <Textarea label="プロフィール" {...register('profileBio')} />
      </FormFieldGroup>
      <FormButton type="submit" icon={faCircleCheck}>
        Save
      </FormButton>
    </Form>
  )
}

export default Step05Form
