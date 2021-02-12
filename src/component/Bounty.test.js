import renderer from 'react-test-renderer';
import React from 'react'
import { Bounty } from './Bounty'

const bounty = {
    bounty_id: 21,
    title: 'Get a client',
    life: 2,
    lifeMax: 3,
    money: 0,
    moneyMax: 0,
    users: 1,
    programmers: 1,
    servers: 0,
    sourceCode: 0,
    references: 0,
    tags: [],
    tagLinks: [],
    hurtLog: ['26th January, no launch, dead by 26th February', 'Worked for free, need to vet people more'],
};

test('Bounty renders correctly', () => {
    expect(renderer
        .create(<Bounty {...bounty} />)
        .toJSON()
    ).toMatchSnapshot();
});