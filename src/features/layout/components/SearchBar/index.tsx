import { FC, useRef, useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import ROUTES from '@@/routes/routes'

import styles from './styles'

const SearchBar: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [serchParams] = useSearchParams()
  const ref = useRef<HTMLInputElement>(null)
  const [keyword, setKeyword] = useState<string>(serchParams.get('keyword') || '')

  useEffect(() => {
    if (ref.current && location.pathname !== ROUTES.SEARCH) {
      ref.current.value = ''
    } else if (ref.current) {
      ref.current.value = serchParams.get('keyword') || ''
    }
  }, [location.pathname])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`${ROUTES.SEARCH}?keyword=${keyword}`)
  }

  return (
    <form action="/search" css={styles.searchBarWrapper} onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="keyword"
        placeholder="search..."
        css={styles.searchBar}
        onChange={handleInput}
        ref={ref}
      />
      <button type="submit" css={styles.searchButton}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 16, color: 'var(--dark-gray)' }} />
      </button>
    </form>
  )
}

export default SearchBar
