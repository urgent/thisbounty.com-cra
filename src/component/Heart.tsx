import React, { ReactChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import styled from 'styled-components'

const Icon = styled(FontAwesomeIcon)`
  stroke-width: 50;
  font-size: 0.95rem;
`

export function process ({
  fill,
  color,
  enhance
}: {
  fill?: boolean
  color?: string
  enhance?: boolean
}) {
  let props = {}
  if (fill) {
    props = { stroke: 'none', color }
  } else {
    props = { stroke: color, color: 'rgba(0,0,0,0)' }
  }
  if (enhance) {
    props = { ...props, stroke: '#FFF' }
  }
  return props
}

export function Heart ({
  fill,
  color,
  enhance,
  children
}: {
  fill?: boolean
  color?: string
  enhance?: boolean
  children?: ReactChildren
}) {
  return (
    <span>
      <Icon
        className='heart'
        icon={faHeart}
        style={{ ...process({ fill, color, enhance }) }}
      />
      {children}
    </span>
  )
}
