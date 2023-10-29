import { useState, useEffect } from 'react'

import { isAxiosError } from '@@/features/api/utils/apiClient'

import useAPIStatus from '@@/features/api/hooks/useAPIStatus'
import UserData from '@@/features/user/types/UserData'

import useBreadCrumbsUsername from '@@/features/layout/hooks/useBreadCrumbsUsername'

const useUserData = (userID: string) => {
  const { isLoading, setError, apiInit, apiEnd } = useAPIStatus()
  const { setBreadCrumbsUsername } = useBreadCrumbsUsername()
  const [userData, setUserData] = useState<UserData>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      apiInit()

      try {
        // const res = await asohubApiClient.get<UserData>(`/${userID}`)

        const posts = []
        for (let i = 0; i < 50; i += 1) {
          posts.push({
            repositoryName: `repository name ${i}`,
            description: `description${i}`,
            time: '2023/10/25 09:48',
            githubUserName: 'test-user',
            githubUserIcon: 'https://github.com/test-user.png',
          })
        }
        const res: { data: UserData } = {
          data: {
            id: userID,
            name: 'テストユーザ',
            departmentID: 1,
            grade: 4,
            githubUserName: 'test-user',
            githubUserIcon: 'https://github.com/test-user.png',
            posts,
          },
        }
        setUserData(res.data)
      } catch (error) {
        if (isAxiosError(error)) {
          /**
           * ---------------------------------
           * 💡 HTTPステータスコードでエラー処理を分岐
           * ---------------------------------
           * 1. その他
           * ---------------------------------
           */
          switch (error.response?.status) {
            default: {
              setError({ key: 'fetchUserDataError', message: 'ユーザーデータ取得エラー' })
              break
            }
          }
        }
      } finally {
        apiEnd()
      }
    }

    fetchUserData()
  }, [])

  useEffect(() => {
    if (userData) {
      setBreadCrumbsUsername(userData?.name)
    }
  }, [userData])

  return { userData, isLoading }
}

export default useUserData
