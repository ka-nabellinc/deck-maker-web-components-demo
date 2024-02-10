import { css } from "lit";

export const styleBase = css`
  :host {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  .deckRecipe {
    background-color: #fff;
    padding: 16px;
    border: 1px solid #e6e6eb;
    border-radius: 4px;
    max-width: 620px;
  }

  .noContent {
    text-align: center;
    padding: 16px;
  }

  .deckAreaWrapper {
    margin: 8px 0px;
  }

  .deckAreaWrapper::-webkit-scrollbar {
    display: none;
  }

  .dorumageArea,
  .zeronArea {
    display: flex;
    justify-content: center;
    line-height: 0;
  }

  .cardImage {
    width: 100%;
  }

  .dorumageWrapper,
  .zeronWrapper {
    width: 60%;
    cursor: pointer;
  }
`;
