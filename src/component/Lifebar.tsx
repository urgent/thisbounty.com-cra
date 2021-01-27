import React, {ReactChildren} from 'react'
import { Heart } from './Heart'
import styled from "styled-components";

export const Bar = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(19px, 1fr));
    grid-column-gap: 3px;
`

export const Unit = styled.li`
    
`

export function Lifebar({life, max, children}: {life:number, max:number, children?:ReactChildren}) {
    return <Bar>
        {Array.from(Array(life), (_, i) => (
            <Unit key={i}><Heart fill={true} /></Unit>
        ))}
        {Array.from(Array(max - life), (_, i) => (
            <Unit key={i}><Heart fill={true} /></Unit>
        ))}
        {children}
    </Bar>
}