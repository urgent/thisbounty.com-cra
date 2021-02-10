import renderer from 'react-test-renderer';
import React from 'react'
import { ID } from './ID'

test('ID renders correctly', () => {
    const zero = renderer
        .create(<ID value={0} />)
        .toJSON();
    const id = renderer
        .create(<ID value={100} />)
        .toJSON();

    expect(zero).toMatchSnapshot();
    expect(id).toMatchSnapshot();
});