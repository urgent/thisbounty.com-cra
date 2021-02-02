import renderer from 'react-test-renderer';
import React from 'react'
import { Moneybar } from './Moneybar'

test('Moneybar renders correctly', () => {
    const empty = renderer
        .create(<Moneybar money={0} max={100} />)
        .toJSON();
    const filled = renderer
        .create(<Moneybar money={100} max={100} />)
        .toJSON();
    const tiny = renderer
        .create(<Moneybar money={8} max={10} />)
        .toJSON();
    expect(empty).toMatchSnapshot();
    expect(filled).toMatchSnapshot();
    expect(tiny).toMatchSnapshot();
});