import FlashMessages from '@@/features/common/types/FlashMessages'

const signupSuccessFlashMessage: FlashMessages = [
  {
    key: 'linkGithubSuccess',
    type: 'success',
    message: 'Githubアカウントを連携しました',
    isCrossPage: true,
  },
]

export default signupSuccessFlashMessage
