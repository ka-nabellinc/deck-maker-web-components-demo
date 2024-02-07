import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'
import { YGDeckController } from './ygDeckController'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  private ygDeckController?: YGDeckController

  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  @property({ type: String })
  private ygDeckId?: string

  // connectedCallback() {
  //   super.connectedCallback()
  //   this.fetchDeckData()
  // }

  updated(changedProperties: Map<PropertyKey, unknown>) {
    super.updated(changedProperties)
    if (changedProperties.has('ygDeckId')) {
      if (typeof this.ygDeckId !== 'string' || !this.ygDeckId) {
        console.error('ygDeckId must be specified')
        return
      }

      this.ygDeckController = new YGDeckController(this, this.ygDeckId)
    }
  }

  render() {
    console.log('rendering')
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}!
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
      <div>
        ${ this.ygDeckController?.ygDeckData ? html`
          <div class="deckRecipe">
          <div class="head">
              <div class="thumbnail" style="background-image: url(${this.ygDeckController.thumbnailUrl})"></div>
              <div class="deckInfo">
                <div class="deckInfoHead">
                  <div class="regulation">${this.ygDeckController.regulationStr}</div>
                  <div class="updatedAt">${this.ygDeckController.updatedAtStr}</div>
                </div>
                <div class="deckInfoBody">
                  <div class="name">${this.ygDeckController.ygDeckData.name}</div>
                </div>
                <div class="deckInfoFooter">
                  <div class="authorDisplayName">${this.ygDeckController.ygDeckData.author_display_name}</div>
                </div>
              </div>
            </div>
          </div>
        ` : html`deck not found` }
      </div>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }

    * {
        box-sizing: border-box;
      }

      .deckRecipe {
        background-color: #fff;
      }

      .head {
        height: 105px;
        width: 100%;
        border: solid 1px #dee2e6;
        padding: 8px;
        display: flex;
        margin-bottom: 8px;
      }

      .thumbnail {
        height: 100%;
        width: calc(105px / 90 * 130);
        background-size: 150%;
        background-position: left -32px top -63px;
        margin-right: 4px;
      }

      .deckInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .deckInfoHead {
        display: flex;
        align-items: center;
      }

      .regulation {
        padding: 3px;
        font-size: 9px;
        width: fit-content;
        margin-right: 6.5px;
        color: #fff;
        background-color: #343a40;
        border-radius: 0.25rem;
        font-weight: 700;
      }

      .updatedAt {
        font-size: 11px;
        color: #6c757d;
      }

      .deckInfoBody {
        font-size: 12px;
        line-height: 1.3;
        word-break: break-all;
        padding: 4px;
      }

      .deckInfoFooter {
        font-size: 12px;
      }

      .tabs {
        border: solid 1px #dee2e6;
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .tab {
        flex: 1;
        border-right: solid 1px #dee2e6;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        cursor: pointer;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }

      .tab:last-child {
        border-right: none;
      }

      .tab.active {
        color: #fff;
        background-color: #343a40;
      }

      .tab:hover {
        color: #fff;
        background-color: #343a40;
      }

      .deckAreaWrapper {
        border: 1px solid #dee2e6;
      }

      .deckArea {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 8px 4px;
      }

      .cardWrapper {
        width: calc(100% / 8);
      }

      .card {
        color: #fff;
        position: relative;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 4px;
        cursor: pointer;
        transition: .15s ease-in-out;
      }

      .card:hover {
        opacity: .6;
      }

      .cardFigure {
        margin: 0;
      }

      .cardImage {
        width: calc(100% * 8 / 8);
      }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
