import { FC, Fragment } from 'react'

import { steps } from '@@/pages/Signup/data/steps'

import { box, stepStyle, line, message } from './styles'

type StepsProps = {
  step: number
}

const Steps: FC<StepsProps> = ({ step }) => {
  return (
    <>
      <div css={box}>
        {steps.map((info) => (
          <Fragment key={info.step}>
            <span
              css={stepStyle(info.step === step, info.step <= step)}
            >
              {info.step}
            </span>
            {info.step < 6 && <span css={line(info.step < step)} />}
          </Fragment>
        ))}
      </div>
      <p css={message}>{steps[step - 1].message}</p>
    </>
  )
}

export default Steps
