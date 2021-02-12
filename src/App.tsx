import React from 'react'
import { Bounty } from './component/Bounty'
import './App.css'
import styled from 'styled-components'
import { Providers } from './Providers'
import { usePreloadedQuery } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'

const Flag = styled.div`
  text-align: center;
  background-color: #343a40;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  grid-template-rows: [titlebar] 2rem [app] 1fr;
  grid-template-columns: 1fr;
`

const Main = styled.main`
  background: #212529;
  width: 320px;
  justify-self: center;
  margin-top: 1rem;
`

const TitleBar = styled.header`
  margin: 0;
  background: #212529;
  grid-row: titlebar;
  width: 100%;
  font-size: 0.8rem;
  padding: 0.5rem 0 0 1rem;
  text-align: left;

  a {
    color: #fff;
  }
`

const bounties = [
  {
    id: 1,
    title: 'Principles',
    image: '/playing_cards/King of Hearts.png',
    imageAlt: 'King of Hearts, Cropped',
    life: 10,
    lifeMax: 10,
    lifeEnhance: true,
    money: 3,
    moneyMax: 3,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 1,
    scripts: 2,
    libraries: 1,
    tags: ['github', 'docker', 'dvc'],
    tagLinks: [
      'https://github.com/urgent/thisbounty.com',
      'https://github.com/urgent/hasura/blob/master/docker-compose.yaml',
      'https://github.com/urgent/kaiterra'
    ],
    hurtLog: []
  },
  {
    id: 2,
    title: 'Goals',
    image: 'flags/Blackbeard.png',
    imageAlt: 'Flag of Blackbeard, Cropped',
    life: 10,
    lifeMax: 10,
    money: 3,
    moneyMax: 3,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 1,
    scripts: 2,
    libraries: 1,
    tags: ['github'],
    tagLinks: ['https://github.com/urgent/thisbounty.com#goals'],
    hurtLog: []
  },
  {
    id: 3,
    title: 'Rules',
    life: 10,
    lifeMax: 10,
    money: 3,
    moneyMax: 3,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 1,
    scripts: 2,
    libraries: 1,
    tags: ['github'],
    tagLinks: ['https://github.com/urgent/thisbounty.com#rules'],
    hurtLog: []
  },
  {
    id: 4,
    title: 'Bounties',
    life: 10,
    lifeMax: 10,
    money: 3,
    moneyMax: 3,
    users: 1,
    usersMax: 10,
    programmers: 1,
    servers: 1,
    scripts: 2,
    libraries: 1,
    tags: [],
    tagLinks: [],
    hurtLog: []
  },
  {
    id: 5,
    title: 'Wordpress',
    life: 4,
    lifeMax: 5,
    money: 5,
    moneyMax: 5,
    users: 5,
    usersMax: 10,
    programmers: 2,
    servers: 1,
    scripts: 1,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['']
  },
  {
    id: 6,
    title: 'AWS EC2',
    life: 3,
    lifeMax: 3,
    money: 5,
    moneyMax: 5,
    users: 5,
    usersMax: 5,
    programmers: 2,
    servers: 1,
    scripts: 1,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Slow in Australia']
  },
  {
    id: 7,
    title: 'Hasura, Traefik, Souin',
    life: 2,
    lifeMax: 3,
    money: 10,
    moneyMax: 10,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 1,
    scripts: 1,
    libraries: 1,
    tags: [],
    tagLinks: [],
    hurtLog: ['Needs Souin caching']
  },
  {
    id: 8,
    title: 'DVC',
    life: 2,
    lifeMax: 4,
    money: 10,
    moneyMax: 10,
    users: 5,
    usersMax: 5,
    programmers: 1,
    servers: 1,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Interface for extract, dimensions', 'PyTorch']
  },
  {
    id: 9,
    title: 'React',
    life: 3,
    lifeMax: 3,
    money: 10,
    moneyMax: 10,
    users: 1,
    usersMax: 5,
    programmers: 1,
    servers: 2,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: []
  },
  {
    id: 10,
    title: 'Relay',
    life: 3,
    lifeMax: 3,
    money: 10,
    moneyMax: 10,
    users: 1,
    usersMax: 5,
    programmers: 1,
    servers: 2,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: []
  },
  {
    id: 10,
    title: 'Google Cloud',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 10,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 1,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['RAM']
  },
  {
    id: 11,
    title: 'Habit for perfect, no shortcuts',
    life: 3,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Continuous']
  },
  {
    id: 12,
    title: 'Focus, subvocalize actions',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Continuous', 'Visual cues, first thing']
  },
  {
    id: 13,
    title: 'Eliminate distractions. Admit. Move on',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Continuous', 'Corrective action required']
  },
  {
    id: 14,
    title: 'Avoid time sinks, paths to nowhere, fixations',
    life: 1,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Continuous', 'Pomodoro', 'Focus']
  },
  {
    id: 15,
    title: 'Fun, humble, solve a need',
    life: 3,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Continuous']
  },
  {
    id: 16,
    title: 'Visualize before acting',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Reflection', 'Write itinerary, plan the day']
  },
  {
    id: 17,
    title: 'Experience, done it before, no surprises',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['thisbounty.com']
  },
  {
    id: 18,
    title: 'Abstraction, allow tolerance for surprises',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Reflection', 'Need more reflect and visualize']
  },
  {
    id: 19,
    title: 'Reflection, count and log mistakes',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['Replace bad habits with reflection']
  },
  {
    id: 20,
    title: 'Build thisbounty.com',
    life: 3,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['26th January, no launch, dead by 26th February']
  },
  {
    id: 21,
    title: 'Get a client',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    usersMax: 1,
    programmers: 1,
    servers: 0,
    scripts: 0,
    libraries: 0,
    tags: [],
    tagLinks: [],
    hurtLog: [
      '26th January, no launch, dead by 26th February',
      'Worked for free, need to vet people more'
    ]
  }
]

type Props = {
  prepared: {
    appQuery: any
  }
}

const gql = graphql`
  query AppQuery {
    bounty {
      id
      title
      image
      imageAlt
      life
      lifeMax
      money
      moneyMax
      users
      usersMax
      programmers
      servers
      scripts
      libraries
      tags
      tagLinks
      hurtLog
    }
  }
`

function App ({ prepared }: Props) {
  const query = usePreloadedQuery(gql, prepared.appQuery)

  return (
    <Providers>
      <Flag>
        <TitleBar>
          <a href='/'>thisbounty.com</a>
        </TitleBar>
        <Main>
          {bounties.map((bounty, i) => (
            <Bounty {...bounty} key={i} />
          ))}
        </Main>
        <footer>
          <ul>
            <li>
              <a
                href='https://github.com/urgent/thisbounty.com'
                style={{ color: '#fff' }}
              >
                readme.md
              </a>
            </li>
          </ul>
        </footer>
      </Flag>
    </Providers>
  )
}

export default App
