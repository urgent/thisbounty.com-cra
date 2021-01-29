import React, { ReactChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

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
      <FontAwesomeIcon
        className='heart'
        icon={faHeart}
        style={{ strokeWidth: 50, ...process({ fill, color }) }}
      />
      {children}
    </span>
  )
}
