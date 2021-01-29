import React, { ReactChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import styled from 'styled-components'

const Icon = styled(FontAwesomeIcon)`
  strokewidth: 50;
  font-size: 1rem;
`

export function process ({ fill, color }: { fill?: boolean; color?: string }) {
  if (fill) {
    return { stroke: 'none', color }
  } else {
    return { stroke: color, color: 'rgba(0,0,0,0)' }
  }
}

export function Heart ({
  fill,
  color,
  children
}: {
  fill?: boolean
  color?: string
  children?: ReactChildren
}) {
  return (
    <span>
      <Icon
        className='heart'
        icon={faHeart}
        style={{ ...process({ fill, color }) }}
      />
      {children}
    </span>
  )
}
