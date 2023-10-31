// 🌐 GitHubユーザー取得APIレスポンスボディ
type FetchUserAuthResBody = {
  login: string
  id: string
  name: string
  avatar_url: string
  html_url: string
  public_repos: number
}

export default FetchUserAuthResBody
