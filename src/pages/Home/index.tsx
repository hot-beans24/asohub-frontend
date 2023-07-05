import { FC } from 'react'
import { Link } from 'react-router-dom'

const HomePage: FC = () => {
  return (
    <>
      <div>ホーム</div>
      <Link to="login">ログイン画面へ</Link>
    </>
  )
}

export default HomePage
