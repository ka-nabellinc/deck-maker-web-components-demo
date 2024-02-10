import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getDMCardThumbnailUrl } from "../helpers";
import { styleBase } from "./styles";
import type { DMDeckData } from "../types";
// import personSvg from "../static/svg/person.svg";
// import viewsSvg from "../static/svg/views.svg";

@customElement("dm-deck-info")
export class DMDeckInfo extends LitElement {
  @property({ type: Object })
  deckData: DMDeckData | null = null;

  static styles = [styleBase];

  render() {
    return html`
      ${!this.deckData
        ? null
        : html`
            <div class="deckInfoWrapper">
              <div
                class="thumbnail"
                style="background-image: url(${getDMCardThumbnailUrl(
                  this.deckData.thumbnail_url
                )})"
              ></div>
              <div class="deckInfo">
                <!-- ここにデッキ情報を描画 -->
              </div>
            </div>
          `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dm-deck-info": DMDeckInfo;
  }
}
