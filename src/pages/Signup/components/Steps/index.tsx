import { FC, Fragment } from 'react'

import { box, stepStyle, line, message } from './styles'

type StepsProps = {
  step: number
}

const Steps: FC<StepsProps> = ({ step }) => {
  type StepInfo = {
    step: number
    message: string
  }

  const steps: StepInfo[] = [
    {
      step: 1,
      message: '学校のメールアドレスを入力してください'
    },
    {
      step: 2,
      message: 'パスワードを入力してください '
    },
    {
      step: 3,
      message: 'ユーザー情報を入力してください'
    },
    {
      step: 4,
      message: '以下の情報でアカウントを作成します'
    },
    {
      step: 5,
      message: 'プロフィールを入力してください'
    },
    {
      step: 6,
      message: '学校のメールアドレスを入力してください'
    }
  ]

  return (
    <>
      <div css={box}>
        {steps.map((info) => (
          <Fragment key={info.step}>
            <span css={stepStyle(info.step === step, info.step <= step)}>{info.step}</span>
            {info.step < 6 && <span css={line(info.step < step)} />}
          </Fragment>
        ))}
      </div>
      <p css={message}>{steps[step - 1].message}</p>
    </>
  )
}

export default Steps
