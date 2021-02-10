import renderer from 'react-test-renderer';
import React from 'react'
import { Resource } from './Resource'

test('Resource renders correctly', () => {
    const empty = renderer
        .create(<Resource fill={false} color="#F00" />)
        .toJSON();
    const filled = renderer
        .create(<Resource fill={true} color="#F00" />)
        .toJSON();
    expect(empty).toMatchSnapshot();
    expect(filled).toMatchSnapshot();
});