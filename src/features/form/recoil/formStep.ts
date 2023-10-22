import { atom } from "recoil";

// 🌐 Recoilで管理するフォームステップ
const formStep = atom<number>({
  key: 'formStep',
  default: 1,
})

export default formStep