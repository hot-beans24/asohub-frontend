// 🌐 ユーザー認証登録情報
type User = {
  id: string
  email: string
  name: string
  departmentID: number
  grade: number
  githubUserID: string | null
  githubUserIcon: string
  isRepoRegistered: boolean
  role: string[]
} | null

export default User
