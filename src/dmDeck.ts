import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DMDeckController } from "./dmDeckController";
import { getDMCardThumbnailUrl } from "./helpers";
import "./loading";

@customElement("dm-deck")
export class DMDeck extends LitElement {
  private deckController?: DMDeckController;

  @property({ type: String })
  private dmDeckId?: string;

  @state()
  currentTab: "main" | "gr" | "hyperSpatial" | "dorumagedon" | "zeron" = "main";

  // connectedCallback() {
  //   super.connectedCallback()
  //   this.fetchDeckData()
  // }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties);

    // dmDeckIdが変更されたらcontrollerを初期化
    if (changedProperties.has("dmDeckId")) {
      if (typeof this.dmDeckId !== "string" || !this.dmDeckId) {
        console.error("dmDeckId must be specified");
        return;
      }

      this.deckController = new DMDeckController(this, this.dmDeckId);
    }
  }

  changeTab(e: Event) {
    const target = e.target as HTMLElement;
    const tab = target.dataset["tab"] as
      | "main"
      | "gr"
      | "hyperSpatial"
      | "dorumagedon"
      | "zeron";

    if (this.currentTab === tab) return;
    const currentTab = this.currentTab;
    this.currentTab = tab;
    // this.requestUpdate('currentTab', currentTab) // FIXME:　必要?
  }

  isMobile(){
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("rendering");
    return html`
      <div>
        ${this.deckController?.dmDeckData
          ? html`
              <div class="deckRecipe">
                <div class="head">
                  <div
                    class="thumbnail"
                    style="background-image: url(${getDMCardThumbnailUrl(
                      this.deckController.dmDeckData.thumbnail_url
                    )})"
                  ></div>
                  <div class="deckInfo">
                    <div class="deckInfoHead">
                      <div class="regulation">
                        ${this.deckController.regulationStr}
                      </div>
                    </div>
                    <div class="deckInfoBody">
                      <div class="name">
                        ${this.deckController.dmDeckData.name}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tabs">
                  <div
                    class="tab ${this.currentTab === "main"
                      ? "active"
                      : undefined}"
                    @click="${this.changeTab}"
                    data-tab="main"
                  >
                    メイン${this.deckController.dmDeckData.main_cards.length}
                  </div>
                  <div
                    class="tab ${this.currentTab === "gr"
                      ? "active"
                      : undefined}"
                    @click="${this.changeTab}"
                    data-tab="gr"
                  >
                    GR${this.deckController.dmDeckData.gr_cards.length}
                  </div>
                  <div
                    class="tab ${this.currentTab === "hyperSpatial"
                      ? "active"
                      : undefined}"
                    @click="${this.changeTab}"
                    data-tab="hyperSpatial"
                  >
                    超次元${this.deckController.dmDeckData.hyper_spatial_cards
                      .length}
                  </div>
                  ${this.deckController.dmDeckData.dorumagedon
                    ? html`
                        <div
                          class="tab ${this.currentTab === "dorumagedon"
                            ? "active"
                            : undefined}"
                          @click="${this.changeTab}"
                          data-tab="dorumagedon"
                          style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
                        >
                          ドルマゲドン
                        </div>
                      `
                    : null}
                  ${this.deckController.dmDeckData.zeron
                    ? html`
                        <div
                          class="tab ${this.currentTab === "zeron"
                            ? "active"
                            : undefined}"
                          @click="${this.changeTab}"
                          data-tab="zeron"
                        >
                          零龍
                        </div>
                      `
                    : null}
                </div>

                <div class="deckAreaWrapper">
                  ${this.currentTab === "main"
                    ? html`
                        <div class="deckArea main">
                          ${this.deckController.dmDeckData.main_cards.map(
                            (card) => html`
                              <div
                                class="${this.isMobile()
                                  ? "cardWrapperMobile"
                                  : "cardWrapper"}"
                                @click="${this.showCardDetailModal(
                                  card.large_image_url
                                )}"
                              >
                                <img
                                  src="${getDMCardThumbnailUrl(
                                    card.thumbnail_url,
                                    "s"
                                  )}"
                                  class="cardImage"
                                />
                              </div>
                            `
                          )}
                        </div>
                      `
                    : this.currentTab === "gr"
                    ? html`
                        <div class="deckArea gr">
                          ${this.deckController.dmDeckData.gr_cards.map(
                            (card) => html`
                              <div
                                class="${this.isMobile()
                                  ? "cardWrapperMobile"
                                  : "cardWrapper"}"
                                @click="${this.showCardDetailModal(
                                  card.large_image_url
                                )}"
                              >
                                <img
                                  src="${getDMCardThumbnailUrl(
                                    card.thumbnail_url,
                                    "s"
                                  )}"
                                  class="cardImage"
                                />
                              </div>
                            `
                          )}
                        </div>
                      `
                    : this.currentTab === "hyperSpatial"
                    ? html`
                        <div class="deckArea hyperSpatial">
                          ${this.deckController.dmDeckData.hyper_spatial_cards.map(
                            (card) => html`
                              <div
                                class="${this.isMobile()
                                  ? "cardWrapperMobile"
                                  : "cardWrapper"}"
                                @click="${this.showCardDetailModal(
                                  card.large_image_url
                                )}"
                              >
                                <img
                                  src="${getDMCardThumbnailUrl(
                                    card.thumbnail_url,
                                    "s"
                                  )}"
                                  class="cardImage"
                                />
                              </div>
                            `
                          )}
                        </div>
                      `
                    : this.currentTab === "dorumagedon"
                    ? html`
                        <div class="dorumageArea">
                          <div
                            class="dorumageWrapper"
                            @click="${this.showCardDetailModal(dorumagedon)}"
                          >
                            <img src="${dorumagedon}" class="cardImage" />
                          </div>
                        </div>
                      `
                    : this.currentTab === "zeron"
                    ? html`
                        <div class="zeronArea">
                          <div
                            class="zeronWrapper"
                            @click="${this.showCardDetailModal(zeron)}"
                          >
                            <img src="${zeron}" class="cardImage" />
                          </div>
                        </div>
                      `
                    : null}
                </div>
              </div>
            `
          : html`
              <div class="deckRecipe">
                <div class="noContent">ローディング中...</div>
                <my-loading></my-loading>
              </div>
            `}
      </div>
    `;
  }

  static styles = css`
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

    .head {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #e6e6eb;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }

    .thumbnail {
      width: calc(100px / 90 * 130);
      height: 70px;
      background-size: 150%;
      background-position: left -30px top -45px;
      margin-right: 16px;
    }

    .deckInfo {
      width: 100%;
    }

    .deckInfoHead {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .regulation {
      padding: 4px;
      font-size: 11px;
      line-height: 1;
      width: fit-content;
      color: #fff;
      background-color: #818181;
      border-radius: 0.25rem;
      font-weight: 700;
      margin-bottom: 16px;
      height: 19px;
    }

    .views {
      display: flex;
      align-items: center;
      color: #6c757d;
      font-size: 12px;
    }

    .personIcon {
      margin-right: 4px;
    }

    .updatedAt {
      font-size: 11px;
      color: #6c757d;
    }

    .deckInfoBody {
      font-size: 14px;
      line-height: 1;
      text-overflow: ellipsis;
    }

    .tabs {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .tab {
      flex: 1;
      border-right: solid 0.5px #dee2e6;
      border-top: solid 1px #dee2e6;
      border-bottom: solid 1px #dee2e6;
      border-left: solid 0.5px #dee2e6;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      cursor: pointer;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .tab:first-child {
      border-left: solid 1px #dee2e6;
    }

    .tab:last-child {
      border-right: solid 1px #dee2e6;
    }

    .tab.active {
      color: #fff;
      background-color: #343a40;
      border: none;
    }

    .tab:hover {
      color: #fff;
      background-color: #343a40;
    }

    .deckAreaWrapper {
      height: calc(650px - 241px);
      margin: 8px 0px;
      overflow-y: scroll;
      scrollbar-width: none;
    }

    .deckAreaWrapper::-webkit-scrollbar {
      display: none;
    }

    .deckArea {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      line-height: 0;
    }

    .cardWrapper {
      width: calc(100% / 8);
      height: 100%;
      padding: 0.5px;
      cursor: pointer;
    }

    .cardWrapperMobile {
      width: calc(100% / 6);
      height: 100%;
      padding: 0.5px;
      cursor: pointer;
    }

    .dorumageArea,
    .zeronArea {
      display: flex;
      justify-content: center;
      line-height: 0;
    }

    .dorumageWrapper,
    .zeronWrapper {
      width: 60%;
      cursor: pointer;
    }

    .cardImage {
      width: 100%;
    }

    .views {
      line-height: 1;
      border-bottom: 1px solid #e6e6eb;
      padding-bottom: 8px;
      margin-bottom: 16px;
    }

    .viewsIcon {
      width: 11px;
      height: 11px;
      margin-right: 4px;
      margin-top: 2px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      height: 32px;
    }

    .gachimatome {
      width: 80px;
      height: 32px;
    }

    .modalOpenButtons {
      display: flex;
      width: 80%;
      justify-content: flex-end;
    }

    .copyDeck {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: black;
      background: none;
      border: 1px solid black;
      font-weight: bold;
      width: 45%;
      height: 32px;
      border-radius: 20px;
      margin-right: 8px;
      text-decoration: none;
    }

    .deckmakerIcon {
      width: 9px;
      height: 16.5px;
      margin-right: 4px;
    }

    .simulationDeck {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      color: white;
      background-color: #f7ac00;
      width: 45%;
      height: 32px;
      border: none;
      border-radius: 20px;
      cursor: pointer;
    }

    .graphIcon {
      width: 16px;
      height: 13px;
      margin-right: 4px;
    }

    .modalArea {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .hide {
      opacity: 0;
      visibility: hidden;
      transition: 0.5s;
    }

    .show {
      opacity: 1;
      visibility: visible;
      transition: 0.5s;
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

    .cardDetailImg {
      width: 100%;
    }

    @media (max-width: 600px) {
      .cardDetailImg {
        width: calc(100vw - 64px);
      }
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

    .cardSelectModalFrame {
      background-color: white;
      border-radius: 4px;
      line-height: 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-deck": DMDeck;
  }
}
