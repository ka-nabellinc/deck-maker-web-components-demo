import { css } from "lit";

export const styleBase = css`
  .tabs {
    display: flex;
    width: 100%;
    border: solid 1px #dee2e6;
  }

  .tab {
    flex: 1;
    border-right: solid 1px #dee2e6;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .tab:last-child {
    border-right: none;
  }

  .tab.active {
    color: #fff;
    background-color: #343a40;
  }

  .tab:hover {
    color: #fff;
    background-color: #343a40;
  }
`;
