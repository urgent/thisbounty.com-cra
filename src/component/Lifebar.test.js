import renderer from 'react-test-renderer';
import React from 'react'
import { Lifebar } from './Lifebar'

test('Lifebar renders correctly', () => {
    const full3 = renderer
        .create(<Lifebar life={3} max={3} />)
        .toJSON();
    const hurt3 = renderer
        .create(<Lifebar life={2} max={3} />)
        .toJSON();
    const empty3 = renderer
        .create(<Lifebar life={0} max={3} />)
        .toJSON();
    const full10 = renderer
        .create(<Lifebar life={10} max={10} />)
        .toJSON();
    const empty10 = renderer
        .create(<Lifebar life={0} max={10} />)
        .toJSON();
    expect(full3).toMatchSnapshot();
    expect(hurt3).toMatchSnapshot();
    expect(empty3).toMatchSnapshot();
    expect(full10).toMatchSnapshot();
    expect(empty10).toMatchSnapshot();
});