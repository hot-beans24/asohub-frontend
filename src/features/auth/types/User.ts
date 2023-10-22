// 🌐 ユーザー認証登録情報
type User = {
  id: string
  email: string
  name: string
  departmentID: number
  grade: number
  role: string
  githubUserID: string
  githubUserIcon: string
} | null

export default User
