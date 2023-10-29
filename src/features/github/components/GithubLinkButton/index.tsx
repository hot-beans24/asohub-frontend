import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from './styles'

type GithubLinkButtonProps = {
  path: string
  label: string
  type: 'repository' | 'profile'
}

const GithubLinkButton: FC<GithubLinkButtonProps> = ({ path, label, type }) => {
  return (
    <a href={path} css={styles.linkBtn(type)} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} style={{ fontSize: 18 }} />
      <span>{label}</span>
    </a>
  )
}

export default GithubLinkButton
