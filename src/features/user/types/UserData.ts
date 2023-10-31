// 🌐 ユーザーデータ情報
type UserData = {
  id: string
  name: string
  departmentID: number
  grade: number
  githubUserName: string
  githubUserIcon: string
  posts:
    | {
        repositoryName: string
        description: string
        time: string
        githubUserName: string
        githubUserIcon: string
      }[]
    | null
} | null

export default UserData
