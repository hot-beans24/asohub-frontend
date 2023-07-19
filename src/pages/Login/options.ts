import { RegisterOptions } from 'react-hook-form'

export type ValuesType = {
  email: string
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
    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
