import renderer from 'react-test-renderer';
import React from 'react'
import { Userbar } from './Userbar'

test('Userbar renders correctly', () => {
    const empty = renderer
        .create(<Userbar users={0} max={100} />)
        .toJSON();
    const filled = renderer
        .create(<Userbar users={100} max={100} />)
        .toJSON();
    const tiny = renderer
        .create(<Userbar users={8} max={10} />)
        .toJSON();
    expect(empty).toMatchSnapshot();
    expect(filled).toMatchSnapshot();
    expect(tiny).toMatchSnapshot();
});