import { loadQuery } from 'react-relay/hooks'

import { JSResource } from 'route'

import Environment from './relay/Environment'

export const routes = [
  {
    component: JSResource('App', () => import('./App')),
    path: '/',
    exact: true,
    prepare: () => {
      const AppQuery = require('./__generated__/AppQuery.graphql')
      return {
        appQuery: loadQuery(
          Environment,
          AppQuery,
          {},
          {
            fetchPolicy: 'network-only'
          }
        )
      }
    }
  }
]
