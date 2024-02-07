import { css } from "lit";

export const styleBase = css`
  .deckArea {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    line-height: 0;
  }

  .cardWrapper {
    width: calc(100% / 8);
    height: 100%;
    cursor: pointer;
  }

  .cardWrapperMobile {
    width: calc(100% / 6);
    height: 100%;
    cursor: pointer;
  }

  .cardImage {
    width: 100%;
  }
`;
