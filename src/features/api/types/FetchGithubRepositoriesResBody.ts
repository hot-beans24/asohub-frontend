// 🌐 GitHubリポジトリ取得APIレスポンスボディ
type FetchGithubRepositoriesResBody = {
  id: number
  name: string
  description: string
  created_at: string
  html_url: string
}[]

export default FetchGithubRepositoriesResBody
