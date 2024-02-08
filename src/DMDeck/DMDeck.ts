import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DMDeckController } from "../dmDeckController";
import { getDMCardThumbnailUrl } from "../helpers";
import "../DMTabs";
import "../DMDeckArea";
import { Tab } from "../DMTabs";
import dorumagedon from "../static/images/dm/l/dorumagedon.jpg";
import zeron from "../static/images/dm/l/zeron.jpg";
import viewsSvg from "../static/svg/views.svg";

@customElement("dm-deck")
export class DMDeck extends LitElement {
  private deckController?: DMDeckController;

  @property({ type: String })
  dmDeckId?: string;

  @state()
  private currentTab: "main" | "gr" | "hyperSpatial" | "dorumagedon" | "zeron" =
    "main";

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

  changeTab(e: CustomEvent<Tab>) {
    this.currentTab = e.detail;
  }

  showCardDetailModal(cardImg: string | null) {
    const _this = this;
    return function (e: Event) {
      // if (cardImg === dorumagedon_l || cardImg === zeron_l || cardImg === dorumagedon_secret_l || cardImg === zeron_secret_l || cardImg === dorumagedon_BD21_l || cardImg === zeron_BD22_l) {
      //   _this.cardDetailImg = cardImg!
      // } else {
      //   _this.cardDetailImg = getDMCardThumbnailUrl(cardImg);
      // }
      if (!_this.shadowRoot) return;
      const element = _this.shadowRoot.getElementById("cardDetailModalArea");
      if (!element) return;
      element.classList.toggle("show");
      element.classList.toggle("hide");
    };
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

                <dm-tabs
                  currentTab=${this.currentTab}
                  mainCardsLength=${this.deckController.mainCardsLength}
                  grCardsLength=${this.deckController.grCardsLength}
                  hyperSpatialCardsLength=${this.deckController
                    .hyperSpatialCardsLength}
                  ?hasDorumagedon=${this.deckController.hasDorumagedon}
                  ?hasZeron=${this.deckController.hasZeron}
                  @change=${this.changeTab}
                ></dm-tabs>

                <div class="deckAreaWrapper">
                  ${this.currentTab === "main"
                    ? html`
                        <dm-deck-area
                          .cards=${this.deckController.mainCards}
                          @selectImage=${this.showCardDetailModal}
                        >
                        </dm-deck-area>
                      `
                    : this.currentTab === "gr"
                    ? html`
                        <dm-deck-area
                          .cards=${this.deckController.grCards}
                          @selectImage=${this.showCardDetailModal}
                        >
                        </dm-deck-area>
                      `
                    : this.currentTab === "hyperSpatial"
                    ? html`
                        <dm-deck-area
                          .cards=${this.deckController.hyperSpatialCards}
                          @selectImage=${this.showCardDetailModal}
                        >
                        </dm-deck-area>
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

                <div class="views">
                  <img class="viewsIcon" src=${viewsSvg} />
                  <div>${this.deckController.views}</div>
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
