import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { DMDeckController } from "../dmDeckController";
import "../DMDeckInfo";
import "../DMTabs";
import "../DMDeckArea";
import { Tab } from "../DMTabs";
import dorumagedon from "../static/images/dm/l/dorumagedon.jpg";
import zeron from "../static/images/dm/l/zeron.jpg";
import { styleBase } from './styles'

@customElement("dm-deck")
export class DMDeck extends LitElement {
  private deckController?: DMDeckController;

  @property({ type: String })
  dmDeckId?: string;

  @state()
  private currentTab: "main" | "gr" | "hyperSpatial" | "dorumagedon" | "zeron" =
    "main";
  
  connectedCallback() {
    super.connectedCallback()

    if (typeof this.dmDeckId !== "string" || !this.dmDeckId) {
      console.error("dmDeckId must be specified");
      return;
    }

    this.deckController = new DMDeckController(this, this.dmDeckId);
  }

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

  render() {
    console.log("rendering");
    return html`
      <div>
        ${this.deckController?.dmDeckData
          ? html`
              <div class="deckRecipe">
                <dm-deck-info
                  .deckData=${this.deckController.dmDeckData}
                ></dm-deck-info>

                <dm-tabs
                  currentTab=${this.currentTab}
                  .deckData=${this.deckController.dmDeckData}
                  @change=${this.changeTab}
                ></dm-tabs>

                <div class="deckAreaWrapper">
                  ${this.currentTab === "main"
                    ? html`
                        <dm-deck-area .cards=${this.deckController.dmDeckData.main_cards}>
                        </dm-deck-area>
                      `
                    : this.currentTab === "gr"
                    ? html`
                        <dm-deck-area .cards=${this.deckController.dmDeckData.gr_cards}>
                        </dm-deck-area>
                      `
                    : this.currentTab === "hyperSpatial"
                    ? html`
                        <dm-deck-area
                          .cards=${this.deckController.dmDeckData.hyper_spatial_cards}
                        >
                        </dm-deck-area>
                      `
                    : this.currentTab === "dorumagedon"
                    ? html`
                        <div class="dorumageArea">
                          <div class="dorumageWrapper">
                            <img src="${dorumagedon}" class="cardImage" />
                          </div>
                        </div>
                      `
                    : this.currentTab === "zeron"
                    ? html`
                        <div class="zeronArea">
                          <div class="zeronWrapper">
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

  static styles = [styleBase];
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-deck": DMDeck;
  }
}
