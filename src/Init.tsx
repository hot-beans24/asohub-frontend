import { FC, useState, useEffect, PropsWithChildren } from 'react'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const Init: FC<PropsWithChildren> = ({ children }) => {
  const { fetchUserAuth } = useUserAuth()
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      await fetchUserAuth()
    })();
    setIsAuthChecked(true)
  }, [])

  return isAuthChecked ? children : null;
}

export default Init
