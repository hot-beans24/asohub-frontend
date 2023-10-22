import { FC, useEffect } from 'react'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

const Init: FC = () => {
  const { fetchUserAuth } = useUserAuth()

  useEffect(() => {
    (async () => {
      await fetchUserAuth()
    })();
  }, [])

  return null;
};

export default Init
