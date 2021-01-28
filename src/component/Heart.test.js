import renderer from 'react-test-renderer';
import React from 'react'
import { Heart } from './Heart'

test('Heart renders correctly', () => {
    const empty = renderer
        .create(<Heart fill={false} color="#F00" />)
        .toJSON();
    const filled = renderer
        .create(<Heart fill={true} color="#F00" />)
        .toJSON();
    expect(empty).toMatchSnapshot();
    expect(filled).toMatchSnapshot();
});