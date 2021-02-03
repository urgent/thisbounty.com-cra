import React, { ReactChildren } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

const Container = styled.div`
  display: flex;
`

const Icon = styled(FontAwesomeIcon)`
  stroke: #fff;
  stroke-width: 28px;
  color: #37f;
  margin-left: 4px;
  z-index: 100;
  font-size: 24px;
`

const Bar = styled.svg`
  position: relative;
  left: -8px;
  top: 14px;
`

export function Userbar ({
  users,
  max,
  children
}: {
  users: number
  max: number
  children?: ReactChildren
}) {
  return (
    <Container>
      <Icon icon={faUser} />

      <Bar
        width='170'
        height='37'
        fill='none'
        version='1.1'
        viewBox='0 0 180 37'
        className='sc-hKgILt kWdQcq'
        id='svg131'
      >
        <g
          clip-path='url(#clip0)'
          id='g121'
          transform='translate(-12,-13.088235)'
        >
          <g id='g119'>
            <path
              fill='url(#paint1_linear)'
              d={`m 14,14 h ${(users / max) *
                15 *
                max} c 5.059,-0.106 4.081,8.083 -0.793,7 H 14 Z`}
              id='path115'
              style={{ fill: 'url(#paint1_linear)' }}
            />
            <path
              stroke='#ffffff'
              stroke-width='2'
              d={`m 14,13 h -1 v 9 h ${15 * max - 0.5} a 4.5,4.5 0 0 0 0,-9 z`}
              id='path117'
            />
          </g>
        </g>
        <defs id='defs935'>
          <linearGradient
            id='paint1_linear'
            x1='14'
            x2='178'
            y1='21'
            y2='21'
            gradientUnits='userSpaceOnUse'
          >
            <stop id='stop927' stop-color='#0000FF' />
            <stop id='stop929' offset='1' stop-color='#3377FF' />
          </linearGradient>
          <clipPath id='clip0'>
            <path id='path932' fill='#fff' d='M0 0h188v37H0V0z' />
          </clipPath>
        </defs>
      </Bar>

      {children}
    </Container>
  )
}
