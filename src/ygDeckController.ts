import { ReactiveController, ReactiveControllerHost } from 'lit'
import type { YGDeckData } from './types'

export class YGDeckController implements ReactiveController {
  private host: ReactiveControllerHost
  private ygDeckId: string
  private _ygDeckData: YGDeckData | undefined

  constructor(host: ReactiveControllerHost, ygDeckId: string) {
    this.host = host
    this.ygDeckId = ygDeckId
    this.host.addController(this)

    // new Task(host, )
  }

  hostConnected() {
    this.fetchDeckData()
  }

  get ygDeckData() {
    return this._ygDeckData
  }

  set ygDeckData(value: YGDeckData | undefined) {
    this._ygDeckData = value
    // 更新されたらホストコンポーネントに再描画をリクエスト
    this.host.requestUpdate()
  }

  get thumbnailUrl() {
    return `https://storage.googleapis.com/ka-nabell-card-images/img/card/${this.ygDeckData?.thumbnail_url}`
  }

  get regulationStr() {
    if (!this.ygDeckData) return ''
    switch (this.ygDeckData.regulation_type) {
      case 'none':
        return 'ノーリミット'
      case 'masterDuel':
        return 'マスターデュエル'
      case 'limit':
        return 'リミットレギュレーション'
      default:
        return ''
    }
  }

  get updatedAtStr() {
    if (!this.ygDeckData) return ''
    const _updatedAt = new Date(this.ygDeckData.updated_at)
    const year = _updatedAt.getFullYear()
    const month = _updatedAt.getMonth() + 1
    const date = _updatedAt.getDate()

    return `${year}/${month}/${date}`
  }

  async fetchDeckData() {
    try {
      if (typeof this.ygDeckId !== 'string' || !this.ygDeckId) {
        throw new Error('ygDeckId must be specified')
      }
      const url = `https://ockvhiwjud.execute-api.ap-northeast-1.amazonaws.com/prod/proxy/yg-decks/public/${this.ygDeckId}`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network error')
      }
      const json = await response.json() as { ygDeck: YGDeckData}
      console.log(json)
      this.ygDeckData = json.ygDeck
    } catch (e) {
      console.error(e)
    }
  }
}