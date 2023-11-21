type FetchUserAuthResponseBody = {
  authenticated: boolean
  user: {
    user_id: string
    email: string
    user_name: string
    department_id: number
    grade: number
    github_username: string | null
    github_user_icon: string
    authenticated: boolean
    is_repo_registered: boolean
    role: string
  } | null
}

export default FetchUserAuthResponseBody
