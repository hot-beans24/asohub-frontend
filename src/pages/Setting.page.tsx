import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import LinkGithubForm from '@@/features/github/components/LinkGithubForm'
import GithubUser from '@@/features/github/components/GithubUser'
import useGithubUser from '@@/features/github/hooks/useGithubUser'

import SettingBox from '@@/features/user/components/SettingBox'
import SettingBoxTitle from '@@/features/user/components/SettingBoxTItle'
import SettingFIeld from '@@/features/user/components/SettingField'

import useUserState from '@@/features/auth/hooks/useUserState'

import linkGithubSuccessFlashMessage from '@@/features/github/data/linkGithubSuccessFlashMessage'

import department from '@@/features/user/data/department'
import grade from '@@/features/user/data/grade'

import ROUTES from '@@/routes/routes'

import styles from './Setting.styles'

/* ⭐️ 設定ページ : 製作中 ⭐️ */
const SettingPage: FC = () => {
  const navigate = useNavigate()
  const { user } = useUserState()
  const { fetchGithubUser, githubUser } = useGithubUser({ useGithubAPI: true })
  const { setFlashMessages } = useFlashMessages()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const doFetch = async () => {
      if (user?.githubUserID) {
        await fetchGithubUser(user.githubUserID)
      }
    }
    doFetch()
  }, [user])

  useEffect(() => {
    const doSuccess = async () => {
      if (isSuccess) {
        setFlashMessages(linkGithubSuccessFlashMessage)
      }
    }
    doSuccess()
  }, [isSuccess])

  if (!user) {
    navigate(ROUTES.LOGIN)
    return null
  }

  return (
    <div css={styles.container}>
      <SettingBox>
        <SettingBoxTitle>プロフィール</SettingBoxTitle>
        <SettingFIeld title="ユーザーネーム" field={user.name} />
        <SettingFIeld title="メールアドレス" field={user.email} />
        <SettingFIeld title="学科" field={department[user.departmentID]} />
        <SettingFIeld title="学年" field={grade[user.grade]} />
        <SettingFIeld title="GitHubリポジトリ" field={user.isRepoRegistered ? '連携済み' : '未連携'} />
      </SettingBox>
      <SettingBox>
        <SettingBoxTitle statusMessage={!user.githubUserID ? '※ 未連携' : undefined}>GitHubアカウント</SettingBoxTitle>
        {!user.githubUserID && (
          <div css={styles.center}>
            <LinkGithubForm setIsSuccess={setIsSuccess} />
          </div>
        )}
        {user.githubUserID && githubUser && (
          <GithubUser
            githubUserID={user.githubUserID}
            githubUserName={githubUser.name}
            githubUserIcon={user.githubUserIcon}
          />
        )}
      </SettingBox>
    </div>
  )
}

export default SettingPage
