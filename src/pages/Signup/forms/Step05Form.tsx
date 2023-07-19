import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faGhost, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useRecoilValue } from 'recoil'
import { signupFormState } from '@@/recoil/atom/signupFormState'

import Form from '@@/components/form/Form'
import FormFieldGroup from '@@/components/form/FormFieldGroup'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'
import TextField from '@@/components/form/TextFiled'

import { Step05ValuesType, departmentSelectOpts, gradeSelectOpts } from '../options'

type Step05FormProps = {
  nextStep: () => void
  backStep: () => void
}

const Step05Form: FC<Step05FormProps> = ({ nextStep, backStep }) => {
  const { handleSubmit } = useForm<Step05ValuesType>()
  const signupFormValues = useRecoilValue(signupFormState)

  const handleOnSubmit: SubmitHandler<Step05ValuesType> = () => {
    console.dir(signupFormValues)
    nextStep()
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormFieldGroup>
        <TextField label="メールアドレス" type="email" value={signupFormValues.email} readOnly />
        <TextField label="ユーザー名" type="text" value={signupFormValues.username} readOnly />
        <TextField
          label="学科"
          type="text"
          value={departmentSelectOpts[signupFormValues.department - 1].label}
          readOnly
        />
        <TextField label="学年" type="text" value={gradeSelectOpts[signupFormValues.grade - 1].label} readOnly />
      </FormFieldGroup>
      <ButtonGroup>
        <Button type="button" icon={faCaretLeft} onClick={() => backStep()} isNotPrimary isHalfSize>
          Back
        </Button>
        <Button type="submit" icon={faGhost} isIconRight isHalfSize>
          Create
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default Step05Form
