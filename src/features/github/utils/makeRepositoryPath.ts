const makeRepositoryPath = (userID: string, repositoryName: string): string => {
  return `${import.meta.env.VITE_GITHUB_PATH}/${userID}/${repositoryName}`
}

export default makeRepositoryPath
