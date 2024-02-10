import { css } from "lit";

export const styleBase = css`
  .deckInfoWrapper {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #e6e6eb;
    padding-bottom: 8px;
    gap: 16px;
    margin-bottom: 12px;
  }

  .thumbnail {
    width: calc(100px / 90 * 130);
    height: 70px;
    background-size: 150%;
    background-position: left -30px top -45px;
    width: 130px;
    height: 90px;
  }

  .deckInfo {
    width: 100%;
    height: 90px;
  }
`;
