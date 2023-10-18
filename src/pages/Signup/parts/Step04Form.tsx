import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faGhost, faCaretLeft, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useModal } from 'react-hooks-use-modal'
import Lottie from 'lottie-react'

import ModalBox from '@@/features/common/components/ModalBox'

import Form from '@@/features/form/components/Form'
import FormServerError from '@@/features/form/components/FormServerError'
import FormFieldGroup from '@@/features/form/components/FormFieldGroup'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'
import TextField from '@@/features/form/components/TextField'

import useSignup from '@@/features/signup/hooks/useSingup'

import SignupFormState from '@@/features/signup/types/SignupFormState'
import departmentSelectOpts from '@@/features/signup/data/departmentSelectOpts'
import gradeSelectOpts from '@@/features/signup/data/gradeSelectOpts'

import lottieJson from './good.json'

type Step04FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step04Form: FC<Step04FormProps> = ({ signupFormState: { signupFormValues }, nextStep, backStep }) => {
  type FormValues = {
    email: string
    username: string
    departmentID: number
    grade: number
  }

  const { handleSubmit } = useForm<FormValues>()
  const { signup, isLoading, error } = useSignup()

  const [Modal, open] = useModal('root', {
    preventScroll: false,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  })

  const handleOnSubmit: SubmitHandler<FormValues> = async () => {
    const isSuccess = await signup(signupFormValues)
    if (isSuccess) {
      open()
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      {error && <FormServerError error={error} />}
      <FormFieldGroup>
        <TextField label="メールアドレス" type="email" value={signupFormValues.email} readOnly />
        <TextField label="ユーザー名" type="text" value={signupFormValues.username} readOnly />
        <TextField
          label="学科"
          type="text"
          value={departmentSelectOpts[signupFormValues.departmentID - 1].label}
          readOnly
        />
        <TextField label="学年" type="text" value={gradeSelectOpts[signupFormValues.grade - 1].label} readOnly />
      </FormFieldGroup>
      <FormButtonFlex>
        <FormButton type="button" icon={faCaretLeft} onClick={backStep} color="gray" isHalfSize>
          Back
        </FormButton>
        <FormButton type="submit" icon={faGhost} isLoading={isLoading} isIconRight isHalfSize>
          Create
        </FormButton>
      </FormButtonFlex>
      <Modal>
        <ModalBox message="アカウントが作成されました" isNoGap>
          <Lottie animationData={lottieJson} width={200} />
          <FormButton type="submit" onClick={nextStep} icon={faThumbsUp} isIconRight isHalfSize>
            OK
          </FormButton>
        </ModalBox>
      </Modal>
    </Form>
  )
}

export default Step04Form
