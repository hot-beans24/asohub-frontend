import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faArrowLeft, faArrowRight, faGhost } from '@fortawesome/free-solid-svg-icons'
import { useModal } from 'react-hooks-use-modal'
import Lottie from 'lottie-react'

import useUserState from '@@/features/auth/hooks/useUserState'

import useFormStep from '@@/features/form/hooks/useFormStep'

import useSignupFormValues from '@@/features/signup/hooks/useSignupFormValues'
import useSignup from '@@/features/signup/hooks/useSignup'

import ModalBox from '@@/features/common/components/ModalBox'

import Form from '@@/features/form/components/Form'
import FormText from '@@/features/form/components/FormText'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'
import TextField from '@@/features/form/components/TextField'

import departmentSelectOpts from '@@/features/signup/data/departmentSelectOpts'
import gradeSelectOpts from '@@/features/signup/data/gradeSelectOpts'

import lottieGood from '@@/assets/lottie-good.json'

const DoSignupForm: FC = () => {
  const { nextStep, backStep } = useFormStep()
  const { signupFormValues } = useSignupFormValues()
  const { user } = useUserState()

  type FormValues = {
    email: string
    username: string
    departmentID: number
    grade: number
  }

  const { handleSubmit } = useForm<FormValues>()
  const { signup, isMutating } = useSignup()

  const [Modal, open] = useModal('root', {
    preventScroll: false,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  })

  const handleOnSubmit: SubmitHandler<FormValues> = async () => {
    const isSuccess = await signup()
    if (isSuccess) {
      open()
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FormText>以下の情報でアカウントを作成します</FormText>
      <TextField label="メールアドレス" type="email" value={signupFormValues.email!} readOnly />
      <TextField label="ユーザーネーム" type="text" value={signupFormValues.username!} readOnly />
      <TextField
        label="学科"
        type="text"
        value={
          departmentSelectOpts[
            signupFormValues.departmentID ? signupFormValues.departmentID - 1 : user!.departmentID - 1
          ].label
        }
        readOnly
      />
      <TextField
        label="学年"
        type="text"
        value={gradeSelectOpts[signupFormValues.grade ? signupFormValues.grade - 1 : user!.grade - 1].label}
        readOnly
      />
      <FormButtonFlex>
        <FormButton type="button" icon={faArrowLeft} onClick={backStep} color="gray" isHalfSize>
          Back
        </FormButton>
        <FormButton type="submit" icon={faGhost} isLoading={isMutating} isIconRight isHalfSize>
          Create
        </FormButton>
      </FormButtonFlex>
      <Modal>
        <ModalBox message="アカウントが作成されました" isNoGap>
          <Lottie animationData={lottieGood} width={200} />
          <FormButton type="submit" onClick={nextStep} icon={faArrowRight} isIconRight isHalfSize>
            Next
          </FormButton>
        </ModalBox>
      </Modal>
    </Form>
  )
}

export default DoSignupForm
