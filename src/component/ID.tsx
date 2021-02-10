import React, { ReactChildren } from 'react'
import styled from 'styled-components'

const Anchor = styled.a`
  font-size: 1.6rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export function ID ({
  value,
  children
}: {
  value: number
  children?: ReactChildren
}) {
  return (
    <>
      <Anchor href={`#${value}`}>#{value}</Anchor>
      {children}
    </>
  )
}
