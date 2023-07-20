import { css } from '@emotion/react'

export const box = css`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const stepStyle = (isCurrentStep: boolean, isAlready: boolean) => css`
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

  ${isCurrentStep && 'animation-name: stepAnimate;'}
  animation-duration: 0.4s;
  @keyframes stepAnimate {
    0% {
      transform: scale(0.6);
    }
    60% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const line = (isAlready: boolean) => css`
  width: 40px;
  height: 1px;
  border-radius: 4px;
  background-color: ${isAlready ? 'black' : 'var(--medium-gray)'};
`

export const message = css`
  margin-bottom: 60px;
  color: var(--dark-gray);
  font-weight: 500;
`
