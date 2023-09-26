import { FC, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faBars, faHouse, faUser, faGear, faRightToBracket, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

import Logo from '@@/components/Logo'

const NormalLayout: FC = () => {
  const [isWide, setIsWide] = useState<boolean>(true)
  const clickButton = () => {
    setIsWide((prev) => !prev)
  }
  return (
    <div css={container}>
      <header css={header}>
        <Logo />
        <button type="button" css={newPostBtn}>
          <FontAwesomeIcon icon={faSquarePlus} style={{ fontSize: 22 }} />
          新しいリポジトリを投稿
        </button>
      </header>
      <nav css={nav(isWide)}>
        <ul css={ul}>
          <li>
            <button css={button} onClick={clickButton} type="button" aria-label="toggle">
              <FontAwesomeIcon icon={faBars} style={{ fontSize: 22 }} />
            </button>
          </li>
          <li css={marginBottom}>
            <Link to="/" css={user(isWide)} >
              <img css={userIcon} src="user.png" alt="" />
              <span css={userName(isWide)}>username</span>
            </Link>
          </li>
          {navInfo.map(({ label, path, icon }) => (
            <li>
              <Link to={path} css={navLink(isWide)}>
                <FontAwesomeIcon icon={icon} style={{ fontSize: 16 }} />
                <span css={navLinkLabel(isWide)}>{label}</span>
              </Link>
            </li>
          ))}
          <li css={marginTop}>
            <Link to="/login" css={navLink(isWide)}>
              <FontAwesomeIcon icon={faRightToBracket} style={{ fontSize: 16 }} />
              <span css={navLinkLabel(isWide)}>ログイン</span>
            </Link>
          </li>
        </ul>
      </nav>
      <main css={main}>
        <Outlet />
      </main>
    </div>
  )
}

export default NormalLayout

const navInfo: { 
  label: string
  path: string
  icon: IconDefinition
}[] = [
  { label: 'ホーム', path: '/', icon: faHouse },
  { label: 'マイページ', path: '/mypage', icon: faUser },
  { label: '設定', path: '/setting', icon: faGear }
]

const container = css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: auto 1fr / auto 1fr;
  grid-template-areas:
    "header header"
    "navber main"
  ;
  row-gap: 20px;
  column-gap: 30px;
`

const header = css`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
`

const main = css`
  grid-area: main;
`

const nav = (isWide: boolean) => css`
  width: ${isWide ? '220px' : '100px'};
  /* padding: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed;
  inset: 0; */
  grid-area: navber;
  transition: width 0.4s;
`
const ul = css`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  color: #657990;
  box-shadow: 0 0 30px rgba(180, 191, 221, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

const button = css`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  color: #657990;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s;
  &:hover {
    background-color: #EDF0F3;
  }
`
const user = (isWide: boolean) => css`
  margin-bottom: ${isWide ? '0' : '40px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.6;
  }
`

const userIcon = css`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`

const userName = (isWide: boolean) => css`
  height: 20px;
  color: var(--dark-gray);
  letter-spacing: 1px;
  /* visibility: ${isWide ? 'visible' : 'hidden'}; */
  display: ${isWide ? 'inline-block' : 'none'};
  animation: navLinkLabel;
  animation-duration: 0.4s;
  @keyframes navLinkLabel {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const marginBottom = css`
  margin-bottom: 30px;
`

const navLink = (isWide: boolean) => css`
  width: ${isWide ? '140px' : '46px'};
  height: 46px;
  padding: ${isWide ? '0 20px' : 'none'};
  border-radius: 8px;
  color: #657990;
  font-size: 1.4rem;
  display: flex;
  justify-content: ${isWide ? 'flex-start' : 'center'};
  align-items: center;
  gap: 20px;
  transition: background-color 0.4s;
  &:hover {
    background-color: #EDF0F3;
  }
`

const navLinkLabel = (isWide: boolean) => css`
  white-space: nowrap;
  display: ${isWide ? 'inline-block' : 'none'};
  animation: navLinkLabel;
  animation-duration: 0.4s;
  @keyframes navLinkLabel {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const marginTop = css`
  margin-top: auto;
`

const newPostBtn = css`
  width: 240px;
  height: 52px;
  border-radius: 10px;
  background-color: var(--main-color);
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.6;
  }
`