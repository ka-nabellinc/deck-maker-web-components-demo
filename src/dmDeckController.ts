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
    // 更新されたらホストコンポーネントに再描画をリクエスト
    this.host.requestUpdate()
  }

  // get thumbnailUrl() {
  //   return `https://storage.googleapis.com/ka-nabell-card-images/img/card/${this.ygDeckData?.thumbnail_url}`
  // }

  get regulationStr() {
    if (!this.dmDeckData) return ''
    switch (this.dmDeckData.regulation_type) {
      case 'none':
        return '殿堂ゼロ'
      case 'advance':
        return 'アドバンス'
      case '2block':
        return '2ブロック'
      case 'party':
        return 'デュエパーティー'
      case 'original':
        return 'オリジナル'
      default:
        return ''
    }
  }

  get mainCards() {
    return this.dmDeckData?.main_cards || []
  }

  get grCards() {
    return this.dmDeckData?.gr_cards || []
  }

  get hyperSpatialCards() {
    return this.dmDeckData?.hyper_spatial_cards || []
  }

  get mainCardsLength() {
    return this.mainCards.length
  }

  get grCardsLength() {
    return this.grCards.length
  }

  get hyperSpatialCardsLength() {
    return this.dmDeckData?.hyper_spatial_cards.length || 0
  }

  get hasDorumagedon() {
    return !!this.dmDeckData?.dorumagedon
  }

  get hasZeron() {
    return !!this.dmDeckData?.zeron
  }

  get views() {
    return this.dmDeckData?.views || 0
  }

  // get updatedAtStr() {
  //   if (!this.ygDeckData) return ''
  //   const _updatedAt = new Date(this.ygDeckData.updated_at)
  //   const year = _updatedAt.getFullYear()
  //   const month = _updatedAt.getMonth() + 1
  //   const date = _updatedAt.getDate()

  //   return `${year}/${month}/${date}`
  // }

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
      console.log(json)
      this.dmDeckData = json.dmDeck
    } catch (e) {
      console.error(e)
    }
  }
}