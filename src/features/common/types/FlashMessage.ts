// 🌐 フラッシュメッセージ
type FlashMessage = {
  key: string
  type: 'success' | 'error'
  message: string
  isAutoHidden?: boolean
}

export default FlashMessage
