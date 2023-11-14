import { FC, FormEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'
import ContentsLoading from '@@/features/common/components/ContentsLoading'
import AttentionText from '@@/features/common/components/AttentionText'

import useUserState from '@@/features/auth/hooks/useUserState'

import FormButton from '@@/features/form/components/FormButton'

import GithubRepositoriesContainer from '@@/features/github/components/GithubRepositoriesContainer'
import GithubRepository from '@@/features/github/components/GithubRepository'
import GithubRepositoryType from '@@/features/github/types/GithubRepository'

import useGithubRepositories from '@@/features/github/hooks/useGithubRepositories'
import useLinkGithubRepositories from '@@/features/github/hooks/useLinkGithubRepositories'

import linkGithubRepositoriesSuccessFlashMessage from '@@/features/github/data/linkGithubRepositoriesSuccessFlashMessage'

import ROUTES from '@@/routes/routes'

import styles from './LinkRepositories.styles'

/* ⭐️ リポジトリ連携ページ : 製作中 ⭐️ */
const LinkRepositoriesPage: FC = () => {
  console.log('📘 リポジトリ連携(/link-repositories) page render')

  const navigate = useNavigate()
  const { user } = useUserState()
  const { setFlashMessages } = useFlashMessages()
  const { githubRepositories, isLoading: isFetchGithubRepositoriesLoading } = useGithubRepositories()
  const { linkGithubRepositories, isMutating: isLinkGithubRepositoriesLoading } = useLinkGithubRepositories()
  const [selectedRepositories, setSelectedRepositories] = useState<GithubRepositoryType[]>([])

  useEffect(() => {
    if (!user?.githubUserID || user.isRepoRegistered) {
      navigate(ROUTES.SETTING, { replace: true })
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await linkGithubRepositories(selectedRepositories)
    if (isSuccess) {
      navigate(ROUTES.HOME)
      setFlashMessages(linkGithubRepositoriesSuccessFlashMessage)
    }
  }

  if (!user) {
    navigate(ROUTES.LOGIN)
    return null
  }

  return (
    <form css={styles.container} onSubmit={handleSubmit}>
      <div css={styles.header}>
        <p css={styles.text}>AsoHubと連携するGitHubリポジトリを選択してください</p>
        <AttentionText text="現在製作中のため初回のみリポジトリ連携が行えます" />
        <FormButton icon={faPaperPlane} isLoading={isLinkGithubRepositoriesLoading} isIconRight isHalfSize>
          Send
        </FormButton>
      </div>
      {isFetchGithubRepositoriesLoading && <ContentsLoading />}
      {!isFetchGithubRepositoriesLoading && githubRepositories && (
        <GithubRepositoriesContainer>
          {githubRepositories.map((repository) => (
            <GithubRepository
              key={repository.id}
              id={repository.id}
              name={repository.name}
              description={repository.description}
              createdAt={repository.createdAt}
              setSelectedRepositories={setSelectedRepositories}
            />
          ))}
        </GithubRepositoriesContainer>
      )}
    </form>
  )
}

export default LinkRepositoriesPage
