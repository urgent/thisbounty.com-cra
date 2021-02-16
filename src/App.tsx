import React from "react";
import { Bounty } from "./component/Bounty";
import "./App.css";
import styled from "styled-components";
import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import { environment } from "./relay/Environment";

const Flag = styled.div`
  text-align: center;
  background-color: #343a40;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  grid-template-rows: [titlebar] 2rem [app] 1fr [footer] 3rem;
  grid-template-columns: 1fr;
`;

const Main = styled.main`
  background: #212529;
  width: 320px;
  justify-self: center;
  padding-top: 1rem;
`;

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
`;

const Footer = styled.footer`
  margin: 0;
  background: #212529;
  grid-row: footer;
  width: 100%;
  font-size: 0.8rem;
  padding: 0rem 0 0.5rem 1rem;
  text-align: center;

  a {
    color: #fff;
  }
`;

const AppQuery = graphql`
  query AppQuery {
    bounty {
      bounty_id
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
`;

function App() {
  return (
    <Flag>
      <TitleBar>
        <a href="/">thisbounty.com</a>
      </TitleBar>
      <Main>
        <QueryRenderer
          environment={environment}
          query={AppQuery}
          variables={{}}
          render={({ error, props }: { error: any; props: any }) => {
            if (error) {
              console.log(`error ${error}`);
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return props.bounty.map((bounty: any, i: number) => (
              <Bounty {...bounty} key={i} />
            ));
          }}
        />
      </Main>
      <Footer>
        <ul>
          <li>
            <a
              href="https://github.com/urgent/thisbounty.com"
              style={{ color: "#fff" }}
            >
              readme.md
            </a>
          </li>
        </ul>
      </Footer>
    </Flag>
  );
}

export default App;
