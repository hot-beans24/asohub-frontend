// 🌐 フラッシュメッセージ
type FlashMessages =
  | {
      key: string
      type: 'success' | 'error'
      message: string
    }[]
  | null

export default FlashMessages
