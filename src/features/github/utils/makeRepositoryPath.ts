// 🌐 GitHubリポジトリパスを生成
const makeRepositoryPath = (userID: string, repositoryName: string): string => {
  return `https://github.com/${userID}/${repositoryName}`
}

export default makeRepositoryPath
