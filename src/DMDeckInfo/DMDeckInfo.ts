import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getDMCardThumbnailUrl } from "../helpers";
import { styleBase } from "./styles";
import type { DMDeckData } from "../types";
import personSvg from "../static/svg/person.svg";
import viewsSvg from "../static/svg/views.svg";

@customElement("dm-deck-info")
export class DMDeckInfo extends LitElement {
  @property({ type: Object })
  deckData: DMDeckData | null = null;

  static styles = [styleBase];

  get regulationStr() {
    switch (this.deckData?.regulation_type) {
      case "none":
        return "殿堂ゼロ";
      case "advance":
        return "アドバンス";
      case "2block":
        return "2ブロック";
      case "party":
        return "デュエパーティー";
      case "original":
        return "オリジナル";
      default:
        return "";
    }
  }

  get updatedAtStr() {
    if (!this.deckData) return "";
    const createdAt = new Date(this.deckData.updated_at);

    const year = createdAt.getFullYear();
    const month = createdAt.getMonth() + 1;
    const date = createdAt.getDate();

    return `${year}/${month}/${date}`;
  }

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
                <div class="deckInfoHead">
                  <span class="regulation">${this.regulationStr}</span>
                  <span class="updatedAt">${this.updatedAtStr}</span>
                </div>
                <div class="deckInfoBody">
                  <div class="name">${this.deckData.name}</div>
                </div>
                <div class="deckInfoFoot">
                  <div class="author">
                    <img class="authorIcon" src=${personSvg} />${this.deckData
                      .author_display_name}
                  </div>

                  <div class="views">
                    <img class="viewsIcon" src=${viewsSvg} />
                    <div>${this.deckData.views}</div>
                  </div>
                </div>
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
