import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'

import Form from '@@/components/Form/Form'
import Button from '@@/components/Button'

import Skip from '@@/pages/Signup/components/Skip'

type Step05FormProps = {
  nextStep: () => void
}

const Step05Form: FC<Step05FormProps> = () => {
  const navigate = useNavigate()

  return (
    <Form>
      <Skip nextStep={() => navigate('/')} />
      <Button type="button" icon={faGithub} isBlack>
        Login with Github
      </Button>
    </Form>
  )
}

export default Step05Form
