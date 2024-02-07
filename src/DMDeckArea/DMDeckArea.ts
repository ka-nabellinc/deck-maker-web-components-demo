import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleBase } from "./styles";
import { DMCardData } from "../types";
import { isMobile, getDMCardThumbnailUrl } from "../helpers";

@customElement("dm-deck-area")
export class DMDeckArea extends LitElement {
  @property({ type: Array })
  cards: DMCardData[] = [];

  selectCardImage(imageUrl: string | null) {
    const _this = this
    return function() {
      _this.dispatchEvent(new CustomEvent("selectImage", { detail: imageUrl }));
    }
  }

  static styles = [styleBase];

  render() {
    return html`
      <div class="deckArea">
        ${this.cards.map(
          (card) => html`
            <div
              class="${isMobile() ? "cardWrapperMobile" : "cardWrapper"}"
              @click="${this.selectCardImage(card.large_image_url)}"
            >
              <img
                src="${getDMCardThumbnailUrl(card.thumbnail_url, "s")}"
                class="cardImage"
              />
            </div>
          `
        )}
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "dm-deck-area": DMDeckArea;
  }
}
