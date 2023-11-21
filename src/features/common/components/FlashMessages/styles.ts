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
    z-index: 10000;
    inset: 20px 50% auto 50%;
    translate: -50% 0;
  `,
}

export default styles
