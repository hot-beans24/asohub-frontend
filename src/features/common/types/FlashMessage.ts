// 🌐 フラッシュメッセージ
type FlashMessage = {
  key: string
  type: 'success' | 'error'
  message: string
  isCrossPage?: boolean
}

export default FlashMessage
