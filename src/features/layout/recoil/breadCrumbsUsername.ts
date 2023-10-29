import { atom } from 'recoil'

const BreadCrumbsUsername = atom<string | null>({
  key: 'breadCrumbsUsername',
  default: null,
})

export default BreadCrumbsUsername
