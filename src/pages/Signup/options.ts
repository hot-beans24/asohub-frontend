import { RegisterOptions } from 'react-hook-form'
import { SelectOption } from '@@/types/selectOption'

export type Step01ValuesType = {
  email: string
}

export type Step02ValuesType = {
  password: string
  confirmPassword: string
}

export type Step03ValuesType = {
  username: string
  password: string
  confirmPassword: string
  department: string
  grade: string
}

export type Step04ValuesType = {
  username: string
  password: string
  confirmPassword: string
  department: string
  grade: string
}

export const emailOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'メールアドレスを入力してください'
  },
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@s.asojuku.ac.jp$/,
    message: 'メールアドレスの形式が正しくありません'
  }
}

export const usernameOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'ユーザーネームを入力してください'
  }
}

export const passwordOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'パスワードを入力してください'
  }
}

export const confirmPasswordOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'パスワード(確認用)を入力してください'
  }
}

export const departmentOptions: RegisterOptions = {
  required: {
    value: true,
    message: '学科を選択してください'
  }
}

export const gradeOptions: RegisterOptions = {
  required: {
    value: true,
    message: '学年を選択してください'
  }
}

export const departmentSelectOpts: SelectOption[] = [
  { label: '情報工学科', value: 1 },
  { label: '情報システム専攻科', value: 2 },
  { label: '情報システム科', value: 3 }
]

export const gradeSelectOpts: SelectOption[] = [
  { label: '1年', value: 1 },
  { label: '2年', value: 2 },
  { label: '3年', value: 3 },
  { label: '4年', value: 4 }
]
