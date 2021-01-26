import React, {ReactChildren} from 'react'
import {Heart} from './Heart'
import styled from "styled-components";

export const Bar = styled.ul`
    display: grid;
    grid-template-columns: ${ (props: {count?:number}) => Array.from(Array(props.count), (i) => '1fr').join(' ')};
    list-style-type: none;
    grid-column-gap: 3px;
    justify-self: center;
    padding:0;
`

export const Unit = styled.li`
    display: inline;
`

export function Lifebar({life, max, children}: {life:number, max:number, children:ReactChildren}) {
    return <Bar count={max}>
        {Array.from(Array(life), (_, i) => (
            <Unit key={i}><Heart fill={true} /></Unit>
        ))}
        {Array.from(Array(max - life), (_, i) => (
            <Unit key={i}><Heart fill={true} /></Unit>
        ))}
        {children}
    </Bar>
}