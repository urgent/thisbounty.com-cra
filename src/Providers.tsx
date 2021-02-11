import React, { ReactChildren } from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from './relay/Environment'

export const Providers = ({ children }: { children: ReactChildren }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
