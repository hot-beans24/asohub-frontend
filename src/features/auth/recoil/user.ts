import { atom } from 'recoil'

// 🌐 ユーザー認証情報の型
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

// 🌐 Recoilで管理するユーザー認証情報
export const userState = atom<User>({
  key: 'userState',
  default: null,
})
