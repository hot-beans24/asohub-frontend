import { FC, Fragment } from 'react'

import useFormStep from '@@/features/form/hooks/useFormStep'

import styles from './styles'

type StepsProps = {
  maxStep: number
}

const FormSteps: FC<StepsProps> = ({ maxStep }) => {
  const { formStep } = useFormStep()

  return (
    <div css={styles.stepsContainer}>
      {[...Array(maxStep)]
        .map((_, index) => index + 1)
        .map((step) => (
          <Fragment key={step}>
            <span css={styles.step(step === formStep, step <= formStep)}>{step}</span>
            {step < maxStep && <span css={styles.line(step < formStep)} />}
          </Fragment>
        ))}
    </div>
  )
}

export default FormSteps
