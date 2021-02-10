import renderer from 'react-test-renderer';
import React from 'react'
import { Resource } from './Resource'

test('Resource renders correctly', () => {
    const empty = renderer
        .create(<Resource icon="programmers" count={0} />)
        .toJSON();
    const filled = renderer
        .create(<Resource icon="scripts" count={99} />)
        .toJSON();
    expect(empty).toMatchSnapshot();
    expect(filled).toMatchSnapshot();
});