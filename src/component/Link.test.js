import renderer from 'react-test-renderer';
import React from 'react'
import { Link } from './Link'

test('Link renders correctly', () => {
    const link = renderer
        .create(<Link href="#" icon="github" />)
        .toJSON();
    expect(link).toMatchSnapshot();

});