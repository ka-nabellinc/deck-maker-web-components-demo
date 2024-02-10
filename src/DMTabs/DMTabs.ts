import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleBase } from "./styles";
import type { DMDeckData } from "../types";

export type Tab = "main" | "gr" | "hyperSpatial" | "dorumagedon" | "zeron";

@customElement("dm-tabs")
export class DMTabs extends LitElement {
  @property({ type: String })
  currentTab: Tab = "main";

  @property({ type: Object })
  deckData: DMDeckData | null = null;

  static styles = [styleBase];

  changeTab(e: Event) {
    const target = e.target as HTMLElement;
    const tab = target.dataset["tab"] as Tab;

    if (this.currentTab === tab) return;
    const event = new CustomEvent("change", { detail: tab });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="tabs">
        <div
          class="tab ${this.currentTab === "main" ? "active" : undefined}"
          data-tab="main"
          data-testid="main-tab"
          @click=${this.changeTab}
        >
          メイン ${this.deckData?.main_cards.length}
        </div>
        <div
          class="tab ${this.currentTab === "gr" ? "active" : undefined}"
          data-tab="gr"
          data-testid="gr-tab"
          @click=${this.changeTab}
        >
          GR ${this.deckData?.gr_cards.length}
        </div>
        <div
          class="tab ${this.currentTab === "hyperSpatial"
            ? "active"
            : undefined}"
          data-tab="hyperSpatial"
          data-testid="hyperSpatial-tab"
          @click=${this.changeTab}
        >
          超次元 ${this.deckData?.hyper_spatial_cards.length}
        </div>

        ${!this.deckData?.dorumagedon
          ? null
          : html`
              <div
                class="tab ${this.currentTab === "dorumagedon"
                  ? "active"
                  : undefined}"
                data-tab="dorumagedon"
                data-testid="dorumagedon-tab"
                @click=${this.changeTab}
                style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
              >
                ドルマゲドン
              </div>
            `}
        ${!this.deckData?.zeron
          ? null
          : html`
              <div
                class="tab ${this.currentTab === "zeron"
                  ? "active"
                  : undefined}"
                data-tab="zeron"
                data-testid="zeron-tab"
                @click=${this.changeTab}
              >
                零龍
              </div>
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-tabs": DMTabs;
  }
}
