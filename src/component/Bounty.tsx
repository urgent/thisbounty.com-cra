import React, { ReactChildren } from 'react'
import { Lifebar } from './Lifebar'
import styled from 'styled-components'

const Card = styled.div`
  display: grid;
  grid-template-columns: [image] 2fr [stats] 3fr;
  width: 320px;
  background-color: $thisbounty-com-style-guide-colors-primary;
  color: #fff;
  margin: 0 auto;
  box-shadow: $thisbounty-com-style-guide-shadows-render;

  > img {
    grid-column: image;
    width: 128px;
    height: 192px;
    &.center {
      background: black;
      display: flex;
    }
  }

  > .stats {
    grid-column: stats;
    display: grid;
    grid-template-rows: [title] 1fr [life] 1fr [money] 1fr [user] 1fr [programmer] 2fr [icons] 2fr;
    height: 184px;
  }

  .gutter {
    grid-row: gutter;
  }

  .lifebar {
    grid-row: life;
    margin-left: 8px;
  }

  .money {
    grid-row: money;
    margin-left: 4px;
  }

  .programmer {
    grid-row: programmer;
    vertical-align: middle;
    margin-left: 0px;
  }

  .user {
    grid-row: user;
  }

  .user img {
    margin: 0 2px;
  }

  .icon {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    margin-right: 4px;
  }
`

const TitleBar = styled.div`
  margin-left: 8px;
  grid-row: title;
  display: grid;
  grid-template-columns: [header] 5fr [id] 1fr;

  * {
    margin: 4px 0 0 0;
  }

  h2 {
    grid-column: header;
    font-size: 0.8rem;
    text-align: left;
  }

  h3 {
    grid-column: id;
    font-size: 1.2rem;
    height: 1.2rem;
    text-align: center;
  }
`

type Attributes = {
  id: number
  title: string
  life: number
  lifeMax: number
  money: number
  moneyMax: number
  users: number
  programmers: number
  servers: number
  sourceCode: number
  references: number
  tags: String[]
  tagLinks: String[]
  hurtLog?: String[]
  children?: ReactChildren
}

export function Bounty ({
  id,
  title,
  life,
  lifeMax,
  money,
  moneyMax,
  users,
  programmers,
  servers,
  sourceCode,
  references,
  hurtLog,
  children
}: Attributes) {
  return (
    <Card className='bounty'>
      <div className='stats'>
        <TitleBar>
          <h2>{title}</h2>
        </TitleBar>
        <Lifebar life={life} max={lifeMax} />
        {children}
      </div>
    </Card>
  )
}
