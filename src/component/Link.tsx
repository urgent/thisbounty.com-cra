import React, { ReactChildren } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faDocker,
  faAws,
  faGoogle,
  faFigma
} from '@fortawesome/free-brands-svg-icons'
import { faComments, faLink } from '@fortawesome/free-solid-svg-icons'

const Anchor = styled.a`
  color: #fff;
  margin: 0 3px;

  svg {
    padding-bottom: 3px;
  }

  svg:hover {
    border-bottom: 1px solid #fff;
  }
`

function lookup (icon: String) {
  switch (icon) {
    case 'github':
      return faGithub
    case 'docker':
      return faDocker
    case 'comments':
      return faComments
    case 'aws':
      return faAws
    case 'google':
      return faGoogle
    case 'figma':
      return faFigma
    default:
      return faLink
  }
}

export function Link ({
  icon,
  href,
  children
}: {
  icon: String
  href: string
  children?: ReactChildren
}) {
  return (
    <Anchor href={href}>
      <FontAwesomeIcon icon={lookup(icon)} />
      {children}
    </Anchor>
  )
}
