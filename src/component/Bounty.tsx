import React, { ReactChildren } from 'react'
import { Lifebar } from './Lifebar'
import { Moneybar } from './Moneybar'
import { Userbar } from './Userbar'
import { Resource } from './Resource'
import { Link } from './Link'
import styled from 'styled-components'

const Card = styled.div`
  display: grid;
  grid-template-columns: [image] 2fr [stats] 3fr;
  width: 320px;
  height: 192px;
  background-color: #212529;
  color: #fff;
  margin: 0 auto;
  box-shadow: 7px 7px 10px 0px rgb(0 0 0 / 50%);
  margin-bottom: 20px;
  border-radius: 10px;
  border: 4px solid rgba(50, 50, 50, 0.1);

  .shadow {
    position: absolute;
    width: 157px;
    height: 192px;
    box-shadow: inset 7px 7px 16px 3px rgb(0 0 0 / 67%);
    border-radius: 10px 0 0 10px;
  }

  > img {
    grid-column: image;
    width: 157px;
    height: 192px;
    border-radius: 10px 0 0 10px;
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
    padding: 5px 5px 0px 0px;
  }

  .gutter {
    grid-row: gutter;
  }

  .lifebar {
    grid-row: life;
    margin-left: 5px;
  }

  .money {
    grid-row: money;
    margin-left: 5px;
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
  margin-left: 5px;
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

const ResourceBar = styled.div`
  display: flex;
  width: 170px;
  font-size: 0.8rem;
  justify-content: space-evenly;
`

const LinkBar = styled.div`
  display: flex;
  width: 170px;
  font-size: 1rem;
  margin-left: 5px;
`

type Attributes = {
  id: number
  title: string
  image: string
  imageAlt: string
  life: number
  lifeMax: number
  lifeEnhance: boolean
  money: number
  moneyMax: number
  users: number
  usersMax: number
  programmers: number
  servers: number
  scripts: number
  libraries: number
  tags: string[]
  tagLinks: string[]
  hurtLog?: string[]
  children?: ReactChildren
}

export function Bounty ({
  id,
  title,
  image,
  imageAlt,
  life,
  lifeMax,
  lifeEnhance,
  money,
  moneyMax,
  users,
  usersMax,
  programmers,
  servers,
  scripts,
  libraries,
  tags,
  tagLinks,
  hurtLog,
  children
}: Attributes) {
  return (
    <Card className='bounty'>
      <div className='shadow' />
      <img src={image} alt={imageAlt} />
      <div className='stats'>
        <TitleBar>
          <h2>{title}</h2>
        </TitleBar>
        <Lifebar life={life} max={lifeMax} enhance={lifeEnhance} />
        <Moneybar money={money} max={moneyMax} />
        <Userbar users={users} max={usersMax} />
        <ResourceBar>
          <Resource icon='programmers' count={programmers} />
          <Resource icon='servers' count={servers} />
          <Resource icon='scripts' count={scripts} />
          <Resource icon='libraries' count={libraries} />
        </ResourceBar>
        <LinkBar>
          {tags.map((tag, index) => (
            <Link icon={tag} href={tagLinks[index]} />
          ))}
        </LinkBar>
        {children}
      </div>
    </Card>
  )
}
