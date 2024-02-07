import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./loading";

export type Tab = "main" | "gr" | "hyperSpatial" | "dorumagedon" | "zeron"

@customElement("dm-tabs")
export class DMTabs extends LitElement {

  @property({ type: String })
  currentTab: string  = "main";

  @property({ type: Number })
  mainCardsLengh: number = 0

  @property({ type: Number })
  grCardsLengh: number = 0

  @property({ type: Number })
  hyperSpatialCardsLengh: number = 0

  @property({ type: Boolean })
  hasDorumagedon: boolean = false

  @property({ type: Boolean })
  hasZeron: boolean = false

  changeTab(e: Event) {
    const target = e.target as HTMLElement;
    const tab = target.dataset["tab"] as Tab;

    if (this.currentTab === tab) return;
    this.dispatchEvent(new CustomEvent('change', { detail: tab }))
  }

  render() {
    return html`
      <div class="tabs">
        <div
          class="tab ${this.currentTab === "main"
            ? "active"
            : undefined}"
          @click="${this.changeTab}"
          data-tab="main"
        >
          メイン${this.mainCardsLengh}
        </div>
        <div
          class="tab ${this.currentTab === "gr"
            ? "active"
            : undefined}"
          @click="${this.changeTab}"
          data-tab="gr"
        >
          GR${this.grCardsLengh}
        </div>
        <div
          class="tab ${this.currentTab === "hyperSpatial"
            ? "active"
            : undefined}"
          @click="${this.changeTab}"
          data-tab="hyperSpatial"
        >
          超次元${this.hyperSpatialCardsLengh}
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

  static styles = css`
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-tabs": DMTabs;
  }
}
