import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import useReactRouterBreadcrumbs, { BreadcrumbsRoute } from 'use-react-router-breadcrumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import useBreadCrumbsUsername from '@@/features/layout/hooks/useBreadCrumbsUsername'

import ROUTES from '@@/routes/routes'

import styles from './styles'

const HomeIcon = () => <FontAwesomeIcon icon={faHouse} style={{ fontSize: 14 }} />

const BreadCrumbs: FC = () => {
  const { breadCrumbsUsername } = useBreadCrumbsUsername()

  const routes: BreadcrumbsRoute[] = [
    {
      index: true,
      breadcrumb: HomeIcon,
    },
    {
      path: ROUTES.HOME,
      breadcrumb: null,
    },
    {
      path: ROUTES.USER,
      breadcrumb: breadCrumbsUsername || '',
    },
    {
      path: ROUTES.LOGIN,
      breadcrumb: 'Login',
    },
    {
      path: ROUTES.SIGNUP,
      breadcrumb: 'Signup',
    },
  ]
  const breadcrumbs = useReactRouterBreadcrumbs(routes)

  return (
    <div css={styles.container}>
      {breadcrumbs.map(({ breadcrumb, match }) => (
        <Fragment key={match.pathname}>
          <Link to={match.pathname} css={styles.link}>
            {breadcrumb}
          </Link>
          <span css={styles.arrow}>
            <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 14 }} />
          </span>
        </Fragment>
      ))}
    </div>
  )
}

export default BreadCrumbs
