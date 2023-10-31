import { css, keyframes } from '@emotion/react'

const stepAnimate = keyframes`
  0% {
    scale: 1 1 1;
  }
  30% {
    scale: 1.25 0.75 1;
  }
  40% {
    scale: 0.75 1.25 1;
  }
  50% {
    scale: 1.15 0.85 1;
  }
  65% {
    scale: 0.95 1.05 1;
  }
  75% {
    scale: 1.05 0.95 1;
  }
  100% {
    scale: 1 1 1;
  }
`

const styles = {
  stepsContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  step: (isCurrentStep: boolean, isAlready: boolean) => css`
    width: ${isCurrentStep ? '40px' : '36px'};
    height: ${isCurrentStep ? '40px' : '36px'};
    border-radius: 100%;
    outline: ${isCurrentStep ? '3px solid white' : 'none'};
    outline-offset: -6px;
    background-color: ${isAlready ? 'black' : 'var(--medium-gray)'};
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    animation-name: ${isCurrentStep ? stepAnimate : 'none'};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
  `,
  line: (isAlready: boolean) => css`
    width: 40px;
    height: 1px;
    border-radius: 4px;
    background-color: ${isAlready ? 'black' : 'var(--medium-gray)'};
  `,
}

export default styles
