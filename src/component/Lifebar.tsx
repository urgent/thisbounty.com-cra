import React, { ReactChildren } from 'react'
import { Heart } from './Heart'
import styled from 'styled-components'

export const Bar = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(10px + 2vmin), 1fr));
  grid-column-gap: 3px;
`

export function Lifebar ({
  life,
  max,
  children
}: {
  life: number
  max: number
  children?: ReactChildren
}) {
  return (
    <Bar className='lifebar'>
      {Array.from(Array(life), (_, i) => (
        <li key={i}>
          <Heart fill={true} color='#F00' />
        </li>
      ))}
      {Array.from(Array(max - life), (_, i) => (
        <li key={i}>
          <Heart fill={false} color='#F00' />
        </li>
      ))}
      {children}
    </Bar>
  )
}
