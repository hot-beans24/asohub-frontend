type RouteName = 'HOME' | 'SETTING' | 'LOGIN' | 'LOGOUT' | 'SIGNUP' | 'USER' | 'NEW_REPOSITORY'

type Routes = {
  readonly [key in RouteName]: string
}

const ROUTES: Routes = {
  HOME: '/home',
  SETTING: '/setting',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',
  USER: '/:userID',
  NEW_REPOSITORY: '/new-repository',
}

export default ROUTES