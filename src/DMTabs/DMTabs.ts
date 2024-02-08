import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../loading";
import { styleBase } from "./styles";

export type Tab = "main" | "gr" | "hyperSpatial" | "dorumagedon" | "zeron";

@customElement("dm-tabs")
export class DMTabs extends LitElement {
  @property({ type: String })
  currentTab: string = "main";

  @property({ type: Number })
  mainCardsLengh: number = 0;

  @property({ type: Number })
  grCardsLengh: number = 0;

  @property({ type: Number })
  hyperSpatialCardsLengh: number = 0;

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
        >
          メイン ${this.mainCardsLengh}
        </div>
        <div
          class="tab ${this.currentTab === "gr" ? "active" : undefined}"
          @click="${this.changeTab}"
          data-tab="gr"
        >
          GR ${this.grCardsLengh}
        </div>
        <div
          class="tab ${this.currentTab === "hyperSpatial"
            ? "active"
            : undefined}"
          @click="${this.changeTab}"
          data-tab="hyperSpatial"
        >
          超次元 ${this.hyperSpatialCardsLengh}
        </div>
        ${this.hasDorumagedon
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
        ${this.hasZeron
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-tabs": DMTabs;
  }
}
