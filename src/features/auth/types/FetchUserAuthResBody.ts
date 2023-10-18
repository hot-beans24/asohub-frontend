// 🌐 ユーザー認証情報取得APIレスポンスボディ
type FetchUserAuthResBody = {
  authenticated: boolean
  user: {
    user_id: string
    email: string
    user_name: string
    department_id: number
    grade: number
    github_username: string
    github_user_icon: string
    authenticated: boolean
    role: string
  } | null
}

export default FetchUserAuthResBody
