import React, { ReactChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faUsersCog,
  faServer,
  faFileCode,
  faBook
} from '@fortawesome/free-solid-svg-icons'

type Resource = 'programmers' | 'servers' | 'scripts' | 'libraries'

function lookup (icon: Resource) {
  switch (icon) {
    case 'programmers':
      return faUsersCog
    case 'servers':
      return faServer
    case 'scripts':
      return faFileCode
    case 'libraries':
      return faBook
  }
}

export function Resource ({
  icon,
  count,
  children
}: {
  icon: Resource
  count: number
  children?: ReactChildren
}) {
  return (
    <div>
      <FontAwesomeIcon icon={lookup(icon)}></FontAwesomeIcon> x {String(count)}
      {children}
    </div>
  )
}
