import { ReactiveController, ReactiveControllerHost } from 'lit'
import type { DMDeckData } from './types'
import { API_BASE } from './const'

export class DMDeckController implements ReactiveController {
  private host: ReactiveControllerHost
  private dmDeckId: string
  private _dmDeckData: DMDeckData | undefined

  constructor(host: ReactiveControllerHost, dmDeckId: string) {
    this.host = host
    this.dmDeckId = dmDeckId
    this.host.addController(this)
  }

  hostConnected() {
    this.fetchDeckData()
  }

  get dmDeckData() {
    return this._dmDeckData
  }
  set dmDeckData(value: DMDeckData | undefined) {
    this._dmDeckData = value 
    this.host.requestUpdate() // 更新されたらホストコンポーネントに再描画をリクエスト
  }

  async fetchDeckData() {
    try {
      if (typeof this.dmDeckId !== 'string' || !this.dmDeckId) {
        throw new Error('dmDeckId must be specified')
      }
      const url = `${API_BASE}?dmDeckId=${this.dmDeckId}`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network error')
      }
      const json = await response.json() as { dmDeck: DMDeckData }
      this.dmDeckData = json.dmDeck
    } catch (e) {
      console.error(e)
    }
  }
}