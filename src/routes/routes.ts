type RouteName = 'HOME' | 'SETTING' | 'LOGIN' | 'LOGOUT' | 'SIGNUP' | 'USERS' | 'USER' | 'LINK_REPOSITORIES' | 'SEARCH'

type Routes = {
  readonly [key in RouteName]: string
}

const ROUTES: Routes = {
  HOME: '/home',
  SETTING: '/setting',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',
  USERS: '/users',
  USER: '/users/:userID',
  LINK_REPOSITORIES: '/link-repositories',
  SEARCH: '/search',
}

export default ROUTES
