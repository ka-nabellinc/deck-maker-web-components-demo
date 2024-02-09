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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .deckInfoHead {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .regulation {
    padding: 3px;
    font-size: 9px;
    color: #fff;
    background-color: #818181;
    border-radius: 0.25rem;
    font-weight: 700;
  }

  .updatedAt {
    font-size: 12px;
  }

  .deckInfoBody {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .deckInfoFoot {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .author {
    color: #6c757d;
    font-size: 14px;
    line-height: 1.5;
  }

  .authorIcon {
    height: 100%;
    margin-right: 8px;
  }

  .views {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #6c757d;
    font-size: 14px;
    line-height: 1.5;
  }

  .viewsIcon {
    width: 11px;
    height: 11px;
  }
`;
