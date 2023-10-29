import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState, useResetRecoilState } from 'recoil'

import recoilGithubUserreadCrumbsUsername from '@@/features/layout/recoil/breadCrumbsUsername'

const useBreadCrumbsUsername = () => {
  const location = useLocation()
  const [breadCrumbsUsername, setBreadCrumbsUsername] = useRecoilState(recoilGithubUserreadCrumbsUsername)
  const resetBreadCrumbsUsername = useResetRecoilState(recoilGithubUserreadCrumbsUsername)

  useEffect(() => {
    resetBreadCrumbsUsername()
  }, [location.pathname])

  return { breadCrumbsUsername, setBreadCrumbsUsername }
}

export default useBreadCrumbsUsername
