import { FC, useState, useEffect } from 'react'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

import LinkGithubForm from '@@/features/github/components/LinkGithubForm'
import GithubUser from '@@/features/github/components/GithubUser'
import useGithubUsername from '@@/features/github/hooks/useGithubUsername'

import SettingBox from '@@/features/user/components/SettingBox'
import SettingBoxTitle from '@@/features/user/components/SettingBoxTItle'
import SettingFIeld from '@@/features/user/components/SettingField'

import useUserState from '@@/features/auth/hooks/useUserState'

import linkGithubSuccessFlashMessage from '@@/features/github/data/linkGithubSuccessFlashMessage'

import department from '@@/features/user/data/department'
import grade from '@@/features/user/data/grade'

import styles from './Setting.styles'

/* ⭐️ 設定ページ : 製作中 ⭐️ */
const SettingPage: FC = () => {
  console.log('📘 設定(/setting) page render')

  const { user } = useUserState()
  const { githubUsername } = useGithubUsername(user?.githubUserID)
  const { setFlashMessages } = useFlashMessages()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const doSuccess = async () => {
      if (isSuccess) {
        setFlashMessages(linkGithubSuccessFlashMessage)
      }
    }
    doSuccess()
  }, [isSuccess])

  if (!user) {
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
        {user.githubUserID && (
          <GithubUser
            githubUserID={user.githubUserID}
            githubUserName={githubUsername || ''}
            githubUserIcon={user.githubUserIcon}
          />
        )}
      </SettingBox>
    </div>
  )
}

export default SettingPage
