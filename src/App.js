import React from 'react';
import { Lifebar } from './component/Lifebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><a href="https://github.com/urgent/thisbounty.com" style={{ color: "#fff" }}>readme.md</a></p>
        <p><a href="https://docs.google.com/spreadsheets/d/1RSD6Kz04bKAGty_Z_gvSYc_Gu4QtAcTPTuvkK752mEw/edit?usp=sharing" style={{ color: "#fff" }}>Bounties</a></p>
        <Lifebar life={3} max={3} />
      </header>
    </div>
  );
}

export default App;
