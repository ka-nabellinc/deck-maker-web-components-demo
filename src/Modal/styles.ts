import { css } from "lit";

export const styleBase = css`
  .modal {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modalBg {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
  }

  .modalWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cardDetailmodalFrame {
    background-color: rgba(2, 5, 10, 0.65);
    padding: 16px;
    border-radius: 5px;
    line-height: 0;
  }

  .closeArea {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    font-weight: bold;
    color: white;
    margin-left: auto;
    margin-bottom: 8px;
    line-height: 1;
    cursor: pointer;
  }

  .closeIcon {
    width: 13px;
    height: 13px;
    margin-right: 8px;
  }
`;
