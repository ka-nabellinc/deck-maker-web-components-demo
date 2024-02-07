import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-loading")
export class Loading extends LitElement {
  render() {
    return html`
      <div class="Loading light md">
        <div class="Loading__Dot"></div>
        <div class="Loading__Dot"></div>
        <div class="Loading__Dot"></div>
      </div>
    `;
  }

  static styles = css`
    .Loading {
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      font-size: 0;
    }

    .Loading__Dot {
      display: inline-block;
      animation: Loading 1.5s 0s infinite linear;
      animation-fill-mode: both;
      opacity: 0.4;
      border-radius: 100%;
    }

    .Loading__Dot:nth-child(1) {
      animation-delay: 0s;
    }

    .Loading__Dot:nth-child(2) {
      animation-delay: 0.5s;
    }

    .Loading__Dot:nth-child(3) {
      animation-delay: 1s;
    }

    .Loading .Loading__Dot {
      background-color: #666;
    }

    .Loading.sm .Loading__Dot {
      width: 4px;
      height: 4px;
      margin: c4px;
    }

    .Loading.md .Loading__Dot {
      width: 8px;
      height: 8px;
      margin: 6px;
    }

    .Loading.lg .Loading__Dot {
      width: 12px;
      height: 12px;
      margin: 8px;
    }

    @keyframes Loading {
      0% {
        opacity: 0.2;
      }

      50% {
        opacity: 1;
      }

      100% {
        opacity: 0.2;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-loading': Loading
  }
}
