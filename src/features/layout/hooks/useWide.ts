import { useRecoilState } from 'recoil'

import recoilNavbarWidth from '@@/features/layout/recoil/navberWidth'

/* ⭐️ 幅を管理するカスタムフック ⭐️ */
const useWide = () => {
  const [isWide, setIsWide] = useRecoilState<boolean>(recoilNavbarWidth)

  // 🌐 幅を切り替える
  const toggleWide = () => {
    setIsWide((prev) => !prev)
  }

  return {
    isWide,
    toggleWide,
  }
}

export default useWide
