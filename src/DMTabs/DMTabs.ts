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

  render() {
    return html`
      <div class="tabs">
        <div class="tab" data-tab="main" data-testid="main-tab">メイン</div>
        <div class="tab" data-tab="gr" data-testid="gr-tab">GR</div>
        <div class="tab" data-tab="hyperSpatial" data-testid="hyperSpatial-tab">
          超次元
        </div>
        <div
          class="tab"
          data-tab="dorumagedon"
          data-testid="dorumagedon-tab"
          style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
        >
          ドルマゲドン
        </div>
        <div class="tab" data-tab="zeron" data-testid="zeron-tab">零龍</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-tabs": DMTabs;
  }
}
