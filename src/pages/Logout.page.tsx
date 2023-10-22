import { FC, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useModal } from 'react-hooks-use-modal'

import ROUTES from '@@/routes/routes'

import ModalBox from '@@/features/common/components/ModalBox'

import Form from '@@/features/form/components/Form'
import FormServerError from '@@/features/form/components/FormServerError'
import FormButtonFlex from '@@/features/form/components/FormButtonFlex'
import FormButton from '@@/features/form/components/FormButton'

import useLogout from '@@/features/logout/hooks/useLogout'

/* ⭐️ ログアウトページ : 完 ⭐️ */
const LogoutPage: FC = () => {
  const navigate = useNavigate()
  const { logout, isLoading, error } = useLogout()

  const [Modal] = useModal('root', {
    initialValue: true,
    preventScroll: false,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  })

  const handleCancelClick = () => {
    navigate(-1)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await logout()
    if (isSuccess) {
      navigate(ROUTES.HOME)
    }
  }

  return (
    <Modal>
      <ModalBox message="Asohubからログアウトしますか？">
        <Form onSubmit={handleSubmit}>
          {error && <FormServerError error={error} />}
          <FormButtonFlex>
            <FormButton type="button" onClick={handleCancelClick} color="gray" isHalfSize>
              キャンセル
            </FormButton>
            <FormButton type="submit" isLoading={isLoading} isHalfSize>
              ログアウト
            </FormButton>
          </FormButtonFlex>
        </Form>
      </ModalBox>
    </Modal>
  )
}

export default LogoutPage
