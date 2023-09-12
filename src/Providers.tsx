import { FC, PropsWithChildren } from 'react'
import { RecoilRoot } from 'recoil'

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default Providers
