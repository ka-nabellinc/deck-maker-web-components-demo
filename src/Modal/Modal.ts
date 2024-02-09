import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleBase } from "./styles";
import closeSvg from "../static/svg/close.svg";

@customElement("dk-modal")
export class Modal extends LitElement {
  @property({ type: Boolean })
  showModal: boolean = false;

  hide() {
    this.dispatchEvent(new Event("hide"));
  }

  static styles = [styleBase];

  render() {
    return html`
      <div class="modal">
        <div class="modalBg" @click="${this.hide}"></div>
        <div class="modalWrapper">
          <div class="modalContents">
            <div class="cardDetailmodalFrame">
              <div class="closeArea" @click="${this.hide}">
                <img class="closeIcon" src=${closeSvg} /><span>閉じる</span>
              </div>
              <div></div>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dk-modal": Modal;
  }
}
