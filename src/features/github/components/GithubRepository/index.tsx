import { FC, useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import GithubRepositoryType from '@@/features/github/types/GithubRepository'

import styles from './styles'

type GithubRepositoryProps = {
  id: number
  name: string
  description: string
  createdAt: string
  setSelectedRepositories: Dispatch<SetStateAction<GithubRepositoryType[]>>
}

const GithubRepository: FC<GithubRepositoryProps> = ({ id, name, description, createdAt, setSelectedRepositories }) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (isChecked) {
      setSelectedRepositories((prev) => [...prev, { id, name, description, createdAt }])
    } else {
      setSelectedRepositories((prev) => prev.filter((repository) => repository.id !== id))
    }
  }, [isChecked])

  const handleRepositoryClick = () => {
    if (ref.current) {
      ref.current.checked = !ref.current.checked
      setIsChecked(ref.current.checked)
    }
  }

  return (
    <button type="button" css={styles.repositoryWrapper} onClick={handleRepositoryClick}>
      <h3 css={styles.repositoryName}>{name}</h3>
      <p css={styles.description}>{description}</p>
      <span css={styles.time}>{createdAt}</span>
      <div css={styles.checkboxWrapper(isChecked)}>
        {isChecked && <FontAwesomeIcon icon={faCheck} style={{ fontSize: 12, color: 'var(--main-color)' }} />}
        <input type="checkbox" css={styles.checkboxInput} id={`check-${id}`} ref={ref} />
      </div>
    </button>
  )
}

export default GithubRepository
