type RouteName = 'HOME' | 'SETTING' | 'LOGIN' | 'LOGOUT' | 'SIGNUP' | 'USERS' | 'USER' | 'NEW_REPOSITORY' | 'SEARCH'

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
  NEW_REPOSITORY: '/new-repository',
  SEARCH: '/search',
}

export default ROUTES
