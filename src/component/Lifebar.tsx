import React, {ReactChildren} from 'react'
import {Heart} from './Heart'

export function Lifebar({life, max, children}: {life:number, max:number, children:ReactChildren}) {
    return <ul>
        {Array.from(Array(life), (_, i) => (
            <li key={i}><Heart fill={true} /></li>
        ))}
        {Array.from(Array(max - life), (_, i) => (
            <li key={i}><Heart fill={true} /></li>
        ))}
        {children}
    </ul>
}