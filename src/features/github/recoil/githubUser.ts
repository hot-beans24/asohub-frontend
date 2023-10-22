import { atom } from 'recoil'

import GithubUser from '@@/features/github/types/GithubUser'

// 🌐 Recoilで管理するGitHubユーザー情報
const githubUser = atom<GithubUser>({
  key: 'githubUser',
  default: null,
})

export default githubUser