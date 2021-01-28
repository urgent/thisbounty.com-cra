import renderer from 'react-test-renderer';
import React from 'react'
import { Heart, process } from './Heart'

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
test('Process returns correct styles', () => {
    const color = "#FFO";
    const empty = process({ fill: false, color });
    const filled = process({ fill: true, color });
    expect(empty.stroke).toBe(color);
    expect(empty.color).toBe("rgba(0,0,0,0)");
    expect(filled.stroke).toBe("none");
    expect(filled.color).toBe(color);
})