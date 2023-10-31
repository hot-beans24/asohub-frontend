// 🌐 ホーム画面投稿一覧取得APIレスポンスボディ
type FetchHomePostsResBody = {
  id: string
  name: string
  user_id: string
  asohub_username: string
  github_username: string
  github_user_icon: string
  repository_url: string
  description: string
  repository_created_at: string
  created_at: string
}[]

export default FetchHomePostsResBody
