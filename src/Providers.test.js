import renderer from 'react-test-renderer';
import React from 'react'
import { Providers } from './Providers'

test('Providers renders correctly', () => {
    expect(renderer
        .create(<Providers><span>Test</span></Providers>)
        .toJSON()
    ).toMatchSnapshot();
});