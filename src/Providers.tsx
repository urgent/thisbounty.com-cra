import React, { ReactNode } from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from './relay/Environment'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
