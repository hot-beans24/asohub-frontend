import { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import useFlashMessages from '@@/features/common/hooks/useFlashMessages'

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
  const navigate = useNavigate()
  const { setFlashMessages } = useFlashMessages()
  const { githubRepositories } = useGithubRepositories()
  const { linkGithubRepositories, isLoading } = useLinkGithubRepositories()
  const [selectedRepositories, setSelectedRepositories] = useState<GithubRepositoryType[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSuccess = await linkGithubRepositories(selectedRepositories)
    if (isSuccess) {
      navigate(ROUTES.LINK_REPOSITORIES)
      setFlashMessages(linkGithubRepositoriesSuccessFlashMessage)
    }
  }

  return (
    <form css={styles.container} onSubmit={handleSubmit}>
      <div css={styles.header}>
        <p css={styles.text}>AsoHubと連携するGitHubリポジトリを選択してください</p>
        <FormButton icon={faPaperPlane} isLoading={isLoading} isIconRight isHalfSize>
          Send
        </FormButton>
      </div>
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
    </form>
  )
}

export default LinkRepositoriesPage
