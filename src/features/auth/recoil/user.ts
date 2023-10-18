import { atom } from 'recoil'

export type User = {
  id: string
  email: string
  name: string
  departmentID: number
  grade: number
  role: string
  githubUserID: string
  githubUserIcon: string
} | null

export const userState = atom<User>({
  key: 'userState',
  default: null
})
