import useSWRImmutable from 'swr/immutable'

import useFetcher from '@@/features/api/hooks/useFetcher'

import ResponseBody from '@@/features/api/types/httpbody/response/FetchGithubUsername'

/* ⭐️ GitHubユーザーネームフック ⭐️ */
const useGithubUsername = (githubUserID?: string | null) => {
  const fetcher = useFetcher<null, ResponseBody>('fetchGithubUsername', {
    errors: {
      notfound: { key: 'fetchGithubUsername-NotFound', message: 'アカウントが見つかりませんでした' },
    },
  })

  const { data, isLoading } = useSWRImmutable(
    githubUserID ? `https://api.github.com/users/${githubUserID}` : null,
    fetcher
  )

  return {
    githubUsername: data?.name,
    isLoading,
  }
}

export default useGithubUsername
