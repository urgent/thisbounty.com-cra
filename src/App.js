import React from 'react';
import { Bounty } from './component/Bounty'
import './App.css';

const bounties = [
  {
    id: 1,
    title: 'Principles',
    life: 10,
    lifeMax: 10,
    money: 3,
    moneyMax: 3,
    users: 1,
    programmers: 1,
    servers: 1,
    sourceCode: 2,
    references: 1,
    tags: ['github', 'docker', 'dvc'],
    tagLinks: ['https://github.com/urgent/thisbounty.com', 'https://github.com/urgent/hasura/blob/master/docker-compose.yaml', 'https://github.com/urgent/kaiterra'],
    hurtLog: [],
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header"><a href="/">thisbounty.com</a></header>
      <main>
        {bounties.map(bounty => <Bounty {...bounty} />)}
      </main>
      <footer>
        <ul>
          <li><a href="https://github.com/urgent/thisbounty.com" style={{ color: "#fff" }}>readme.md</a></li>
          <li><a href="https://docs.google.com/spreadsheets/d/1RSD6Kz04bKAGty_Z_gvSYc_Gu4QtAcTPTuvkK752mEw/edit?usp=sharing" style={{ color: "#fff" }}>Bounties</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
