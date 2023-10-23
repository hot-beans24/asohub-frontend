import { css } from '@emotion/react'

const styles = {
  flashMessagesContainer: css`
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: fixed;
    inset: 20px 50% auto 50%;
    translate: -50% 0;
  `,
  flashMessageWrapper: (type: 'success' | 'error') => css`
    width: 100%;
    padding: 14px 24px;
    border-radius: 6px;
    border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
    background-color: white;
    color: ${type === 'success' ? 'var(--success-color)' : 'var(--error-color)'};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    animation-name: message;
    animation-duration: 10s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
    animation-fill-mode: both;
    @keyframes message {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      10% {
        opacity: 1;
        transform: translateY(0);
      }
      90% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
      }
    }
  `,
  flashMessageText: css`
    margin-right: 20px;
    white-space: wrap;
    flex: 1;
  `
}

export default styles