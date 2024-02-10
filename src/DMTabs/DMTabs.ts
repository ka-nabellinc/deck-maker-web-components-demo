import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../loading";
import { styleBase } from "./styles";
import type { DMDeckData } from "../types";

export type Tab = "main" | "gr" | "hyperSpatial" | "dorumagedon" | "zeron";

@customElement("dm-tabs")
export class DMTabs extends LitElement {
  @property({ type: String })
  currentTab: string = "main";

  @property({ type: Object })
  deckData: DMDeckData | null = null;

  @property({ type: Number })
  mainCardsLength: number = 0;

  @property({ type: Number })
  grCardsLength: number = 0;

  @property({ type: Number })
  hyperSpatialCardsLength: number = 0;

  @property({ type: Boolean })
  hasDorumagedon: boolean = false;

  @property({ type: Boolean })
  hasZeron: boolean = false;

  changeTab(e: Event) {
    const target = e.target as HTMLElement;
    const tab = target.dataset["tab"] as Tab;

    if (this.currentTab === tab) return;
    this.dispatchEvent(new CustomEvent("change", { detail: tab }));
  }

  static styles = [styleBase];

  render() {
    return html`
      <div class="tabs">
        <div
          class="tab ${this.currentTab === "main" ? "active" : undefined}"
          @click="${this.changeTab}"
          data-tab="main"
          data-testid="main-tab"
        >
          メイン ${this.deckData?.main_cards.length || 0}
        </div>
        <div
          class="tab ${this.currentTab === "gr" ? "active" : undefined}"
          @click="${this.changeTab}"
          data-tab="gr"
          data-testid="gr-tab"
        >
          GR ${this.deckData?.gr_cards.length || 0}
        </div>
        <div
          class="tab ${this.currentTab === "hyperSpatial"
            ? "active"
            : undefined}"
          @click="${this.changeTab}"
          data-tab="hyperSpatial"
          data-testid="hyperSpatial-tab"
        >
          超次元 ${this.deckData?.hyper_spatial_cards.length || 0}
        </div>
        ${this.deckData?.dorumagedon
          ? html`
              <div
                class="tab ${this.currentTab === "dorumagedon"
                  ? "active"
                  : undefined}"
                @click="${this.changeTab}"
                data-tab="dorumagedon"
                data-testid="dorumagedon-tab"
                style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
              >
                ドルマゲドン
              </div>
            `
          : null}
        ${this.deckData?.zeron
          ? html`
              <div
                class="tab ${this.currentTab === "zeron"
                  ? "active"
                  : undefined}"
                @click="${this.changeTab}"
                data-tab="zeron"
                data-testid="zeron-tab"
              >
                零龍
              </div>
            `
          : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-tabs": DMTabs;
  }
}
