import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faGhost, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useModal } from 'react-hooks-use-modal'

import { Form, FormFieldGroup, TextField } from '@@/components/Form'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'

import { SignupFormState, Step04FormValues } from '@@/pages/Signup/types/signupForm'
import { departmentSelectOpts, gradeSelectOpts } from '@@/pages/Signup/data/selectOptions'

type Step04FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step04Form: FC<Step04FormProps> = ({ signupFormState: { signupFormValues }, nextStep, backStep }) => {
  const { handleSubmit } = useForm<Step04FormValues>()

  const handleOnSubmit: SubmitHandler<Step04FormValues> = () => {
    console.dir(signupFormValues)
    nextStep()
  }

  const handleOnBack = () => {
    backStep()
  }

  const [Modal, open, close] = useModal('root')

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
        <Button type="button" icon={faCaretLeft} onClick={handleOnBack} isNotPrimary isHalfSize>
          Back
        </Button>
        <Button type="button" icon={faGhost} onClick={open} isIconRight isHalfSize>
          Create
        </Button>
      </ButtonGroup>
      <Modal>
        hello
        <button type="button" onClick={close}>close</button>
      </Modal>
    </Form>
  )
}

export default Step04Form
