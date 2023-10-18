type StepInfo = {
  step: number
  message: string
}

export const steps: StepInfo[] = [
  {
    step: 1,
    message: '学校のメールアドレスを入力してください'
  },
  {
    step: 2,
    message: 'パスワードを入力してください '
  },
  {
    step: 3,
    message: 'ユーザー情報を入力してください'
  },
  {
    step: 4,
    message: '以下の情報でアカウントを作成します'
  },
  // {
  //   step: 5,
  //   message: 'プロフィールを入力してください'
  // },
  // 一旦非表示
  {
    step: 5,
    message: 'GitHubアカウントと連携してください'
  }
]
