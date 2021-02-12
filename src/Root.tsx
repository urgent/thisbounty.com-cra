import React from 'react'
import {
  RouterRenderer,
  RoutingContext,
  createRouter
} from './packages/route/src/index'

import { createBrowserHistory } from 'history'

import { routes } from './routes'

import { Providers } from './Providers'

const router = createRouter(routes, createBrowserHistory())

const Root = () => {
  return (
    <Providers>
      <RoutingContext.Provider value={router.context}>
        <RouterRenderer />
      </RoutingContext.Provider>
    </Providers>
  )
}

export default Root
