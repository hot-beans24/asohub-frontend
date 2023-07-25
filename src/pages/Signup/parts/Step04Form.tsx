import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { faGhost, faCaretLeft, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useModal } from 'react-hooks-use-modal'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'

import { Form, FormFieldGroup, TextField } from '@@/components/Form'
import Button from '@@/components/Button'
import ButtonGroup from '@@/components/ButtonGroup'

import { SignupFormState, Step04FormValues } from '@@/pages/Signup/types/signupForm'
import { departmentSelectOpts, gradeSelectOpts } from '@@/pages/Signup/data/selectOptions'
import lottieJson from './good.json'

import { modalBox, message } from './styles'

type Step04FormProps = {
  signupFormState: SignupFormState
  nextStep: () => void
  backStep: () => void
}

const Step04Form: FC<Step04FormProps> = ({ signupFormState: { signupFormValues }, nextStep, backStep }) => {
  const { handleSubmit } = useForm<Step04FormValues>()

  const handleOnSubmit: SubmitHandler<Step04FormValues> = () => {
    console.dir(signupFormValues)
  }

  const handleOnBack = () => {
    backStep()
  }

  const [Modal, open] = useModal('root', {
    preventScroll: false,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    }
  })

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
        <motion.div
          css={modalBox}
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
        >
          <p css={message}>\\ アカウントが作成されました //</p>
          <Lottie animationData={lottieJson} width={200} />
          <Button type="submit" onClick={() => nextStep()} icon={faThumbsUp} isIconRight isHalfSize autoFocus={false}>OK</Button>
        </motion.div>
      </Modal>
    </Form>
  )
}

export default Step04Form
