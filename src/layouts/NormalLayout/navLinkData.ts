import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUser, faGear } from '@fortawesome/free-solid-svg-icons'

type NavLinkData = {
  path: string
  label: string
  icon: IconDefinition
  isRequiredLogin?: boolean
}

export const navLinkData: NavLinkData[] = [
  {
    path: '/home',
    label: 'ホーム',
    icon: faHouse
  },
  {
    label: 'マイページ',
    path: '/mypage',
    icon: faUser,
    isRequiredLogin: true
  },
  {
    label: '設定',
    path: '/setting',
    icon: faGear,
    isRequiredLogin: true
  }
]
