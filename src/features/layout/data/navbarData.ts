import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUser, faGear, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

// 🌐 ナビゲーションバーデータ
type NavbarData = {
  path: string
  label: string
  icon: IconDefinition
  isLastPosition?: boolean
  isRequiredLogin?: boolean
}

// 🌐 ナビゲーションバーデータ一覧
const navbarData: NavbarData[] = [
  {
    path: '/home',
    label: 'ホーム',
    icon: faHouse,
  },
  {
    label: 'マイページ',
    path: '/mypage',
    icon: faUser,
    isRequiredLogin: true,
  },
  {
    label: '設定',
    path: '/setting',
    icon: faGear,
    isRequiredLogin: true,
  },
  {
    label: 'ログイン',
    path: '/login',
    icon: faRightToBracket,
    isLastPosition: true,
  },
  {
    label: 'ログアウト',
    path: '/logout',
    icon: faRightFromBracket,
    isLastPosition: true,
    isRequiredLogin: true,
  },
]

export default navbarData
