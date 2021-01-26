import React, {ReactChildren} from 'react'
import { Lifebar } from './Lifebar'

type Attributes = {id:number, title:string, life:number, lifeMax:number, money:number, moneyMax:number, users:number, programmers:number, servers:number, sourceCode:number, references:number, tags:String[], tagLinks:String[], hurtLog?:String[], children?:ReactChildren};

export function Bounty({id, title, life, lifeMax, money, moneyMax, users, programmers, servers, sourceCode, references, hurtLog, children}: Attributes) {
    return <div>
        <h2>{title}</h2>
        <Lifebar life={life} max={lifeMax} />
        {children}
    </div>
}