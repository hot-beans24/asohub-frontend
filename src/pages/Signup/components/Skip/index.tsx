import { FC } from 'react'

import { skip } from './styles'

type SkipProps = {
  nextStep: () => void
}

const Skip: FC<SkipProps> = ({ nextStep }) => {
  return (
    <button type="button" css={skip} onClick={() => nextStep()}>スキップ {`>>>`}</button>
  )
}

export default Skip